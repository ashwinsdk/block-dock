import React, { useState, useEffect } from 'react';
import './css/style.css';
import { ethers } from 'ethers';
import transfer from './contracts/GrievanceSystem.json'; // Import the ABI properly

const contractABI = transfer.abi;
//const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
//Sepolia 
//const contractAddress = "0x26b01E3AD38E32645f308d11C81575D03f126da9";
const contractAddress = "0xb93E6A9CA2C59267cBfb484Ac0F24440B19574ca";

function ReceiveFundPage() {
  const [newFund, setNewFund] = useState({ amount: '' });
  const [balance, setBalance] = useState(0); // To store the balance
  const [receivedFunds, setReceivedFunds] = useState([]);

  // Fetch balance and set contract interaction
  useEffect(() => {
    const fetchBalance = async () => {
      if (!window.ethereum) {
        alert('Please install MetaMask!');
        return;
      }
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        // Fetch balance from the contract
        const balance = await contract.viewBalanceAdminHead(); // Replace with the actual function name in the contract
        setBalance(balance.toString()); // Display balance in raw token form (Wei or similar unit)

        const fundsData = await contract.viewFundRequests();
        const parsedFunds = fundsData.map((fund, index) => ({
          id: index + 1,
          source: fund.adminHead, // Wallet address of the fund requester
          amount: fund.amount.toString(), // Convert raw Wei amount to Ether
          status: fund.status || "Pending", // Assuming the third field is the status
        }));

        setReceivedFunds(parsedFunds);


      } catch (error) {
        console.error('Error fetching balance:', error);
        alert('An error occurred while fetching balance.');
      }
    };

    fetchBalance();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFund({ ...newFund, [name]: value });
  };

  // Handle form submission for requesting funds
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!window.ethereum) {
      alert('Please install MetaMask!');
      return;
    }
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      // Convert amount to Wei if needed, or send it directly if it's in the contract's base unit
      // const amountInWei = ethers.parseEther(newFund.amount); // You can skip this if the contract uses raw token value
      // const tx = await contract.requestFunds(amountInWei); // Adjust based on your contract function
      const tx = await contract.requestFunds(newFund.amount); // Send token value directly
      await tx.wait();
      alert('Fund request submitted successfully!');

      // Reset form
      setNewFund({ amount: '' });

      // Re-fetch balance after transaction
      const updatedBalance = await contract.viewBalanceAdminHead();
      setBalance(updatedBalance.toString());



    } catch (error) {
      console.error('Error requesting funds:', error);
      alert('An error occurred while submitting the fund request.');
    }
  };

  return (
    <div className="receive-funds-container">
      <header className="header">
        <h1>Block-Dock</h1>
      </header>

      <div className="financial-summary">
        <p>Balance: {balance}</p> {/* Display raw balance */}
      </div>

      <main className="content">
        <h2>Request Funds</h2>

        {/* Form to request new funds */}
        <form onSubmit={handleSubmit} className="add-fund-form">
          <input
            type="text"
            name="amount"
            value={newFund.amount}
            onChange={handleChange}
            placeholder="Amount (in Tokens)"
            required
          />
          <button type="submit">Request Fund</button>
        </form>
        <h2>Received Fund Requests</h2>

        {/* Table to display received funds */}
        <div>
          <table className="receive-funds-table">
            <thead>
              <tr>
                {/* <th>Wallet</th> */}
                <th>Request Amount (ETH)</th> {/* Display amount in Ether */}
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {receivedFunds.length > 0 ? (
                receivedFunds.map((fund) => (
                  <tr key={fund.id}>
                    {/* <td>{fund.source}</td> */}
                    <td>{fund.amount}</td> {/* Display amount in Ether */}
                    <td>{fund.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No funds found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default ReceiveFundPage;
