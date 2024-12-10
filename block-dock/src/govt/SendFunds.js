import React, { useEffect, useState } from 'react';
import './css/style.css';
import { ethers } from 'ethers';
import transfer from './contracts/GrievanceSystem.json'; // Import the ABI properly

const contractABI = transfer.abi;
//const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
//Sepolia 
//const contractAddress = "0x26b01E3AD38E32645f308d11C81575D03f126da9";
const contractAddress = "0xb93E6A9CA2C59267cBfb484Ac0F24440B19574ca";

function SendFundPage() {
  const [receivedFunds, setReceivedFunds] = useState([]);
  const [balance, setBalance] = useState(0);

  // Fetch balance and received fund requests
  useEffect(() => {
    const fetchContractData = async () => {
      if (!window.ethereum) {
        alert('Please install MetaMask!');
        return;
      }

      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        // Fetch balance (raw token form, e.g., Wei or token's base unit)
        const balance = await contract.viewBalanceAdminGovt();
        setBalance(balance.toString()); // Display the balance in raw token value

        // Fetch the received fund requests (raw token values)
        const fundsData = await contract.viewFundRequests();
        const parsedFunds = fundsData.map((fund, index) => ({
          id: index + 1,
          source: fund.adminHead, // Wallet address of the fund requester
          amount: fund.amount.toString(), // Convert raw Wei amount to Ether
          status: fund.status || "Pending", // Assuming the third field is the status
        }));

        setReceivedFunds(parsedFunds);
      } catch (error) {
        console.error('Error fetching contract data:', error);
        alert('An error occurred while fetching contract data.');
      }
    };

    fetchContractData();
  }, []);

  // Handle payment
  const handlePay = async (fundId) => {
    if (!window.ethereum) {
      alert('Please install MetaMask!');
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      // Find the fund to be paid
      const selectedFund = receivedFunds.find(fund => fund.id === fundId);
      if (!selectedFund) {
        alert('Fund not found!');
        return;
      }

      // Send funds using the contract's method, passing the fund ID
      console.log(selectedFund.id);
      const tx = await contract.sendTokensToAdminHead(selectedFund.id - 1); // Adjust function name accordingly
      await tx.wait();
      alert('Funds sent successfully!');

      // Re-fetch contract data to reflect updated state (balance, fund requests)
      setTimeout(() => window.location.reload(), 1000);
    } catch (error) {
      console.error('Error sending funds:', error);
      alert('An error occurred while sending funds.');
    }
  };

  return (
    <div className="receive-funds-container">
      <header className="header">
        <h1>Block-Dock</h1>
      </header>

      <div className="financial-summary">
        <p>Balance: {balance.toString()} RS</p> {/* Display balance in Ether */}
      </div>

      <main className="content">
        <h2 className='title-h2'>Received Fund Requests</h2>

        {/* Table to display received funds */}
        <div>
          <table className="receive-funds-table">
            <thead>
              <tr>
                {/* <th>Wallet</th> */}
                <th>Amount (in Tokens)</th> {/* Display amount in Ether */}
                <th>Status</th>
                <th>Pay</th>
              </tr>
            </thead>
            <tbody>
              {receivedFunds.length > 0 ? (
                receivedFunds.map((fund) => (
                  <tr key={fund.id}>
                    {/* <td>{fund.source}</td> */}
                    <td>{fund.amount}</td> {/* Display amount in Ether */}
                    <td>{fund.status}</td>
                    <td>
                      <button className='pay-button' onClick={() => handlePay(fund.id)}>Pay</button>
                    </td>
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

export default SendFundPage;
