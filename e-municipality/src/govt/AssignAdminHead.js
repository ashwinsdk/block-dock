import React, { useEffect, useState } from 'react';
import './AssignAdminHead.css';
import { ethers } from "ethers";
import { useNavigate } from 'react-router-dom';



const AssignAdminHead = () => {

  const navigate = useNavigate();

  const [adminHead, setAdminHead] = useState({
    address: '',
    position: 'Municipality Head',
  });
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState('');

  const PUBLIC_ADDRESS = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
  //Sepolia
  //const PUBLIC_ADDRESS = "0x26b01E3AD38E32645f308d11C81575D03f126da9";
  const transfer = require("./contracts/GrievanceSystem.json");
  const ABI = transfer.abi;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminHead((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  useEffect(() => {
    async function init() {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        setProvider(provider);
        await provider.send('eth_requestAccounts', []);  // Request accounts from MetaMask
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(PUBLIC_ADDRESS, ABI, signer);
        setContract(contract);
        const accounts = await provider.listAccounts();
        setAccount(accounts[0]);
      } else {
        console.error('Ethereum provider is not available');
      }
    }
    init();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send the adminDetails to the server
    console.log('Assigned Admin Head Details:', adminHead);
    alert('Admin Head assigned successfully!');
  };

  const updateAdminHead = async () => {
    try {
      const tx = await contract.assignAdminHead(adminHead.address);
      await tx.wait();  // Wait for the transaction to be mined
      console.log('Admin Head updated successfully');
      setAdminHead(adminHead);
      navigate("/admin-govt-home")
    } catch (err) {
      console.error('Error updating admin head:', err);
    }
  };

  return (
    <div className="assign-admin-head">
      <header className="header">
        <h1>Assign Admin Head</h1>
      </header>
      <main className="main-content">
        <form onSubmit={handleSubmit} className="admin-form">
          <label>
            Metamask Address:
            <input
              type="text"
              name="address"
              value={adminHead.address}
              onChange={handleChange}
              required
            />
          </label>


          <label>
            Position:
            <input
              type="text"
              name="position"
              value={adminHead.position}
              readOnly
            />
          </label>

          <button type="submit" className="submit-button" onClick={updateAdminHead}>Assign Admin Head</button>
        </form>
      </main>
      <footer className="footer">
        <p>©️ 2024 E-Municipality. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AssignAdminHead;