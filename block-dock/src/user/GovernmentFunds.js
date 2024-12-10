import React, { useEffect, useState } from 'react';
import "./css/style.css";
import { ethers } from 'ethers';
import transfer from './contracts/GrievanceSystem.json'; // Import the ABI properly

const contractABI = transfer.abi;
//const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
//Sepolia 
//const contractAddress = "0x26b01E3AD38E32645f308d11C81575D03f126da9";
const contractAddress = "0xb93E6A9CA2C59267cBfb484Ac0F24440B19574ca";

function GovernmentFunds() {

    const [receivedFunds, setReceivedFunds] = useState([]);
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

    return (
        <div className="people-data-container">
            <header className="header">
                <h1>Block-Dock</h1>
            </header>

            <main className="content">
                <h2>Government Funds</h2>
                <div className="people-data-list">
                    <table className="people-data-table">
                        <thead>
                            <tr>
                                <th>Amount (Requests made by AdminHead)</th>
                                <th>Status(PAID or NOTPAID by AdminGovt)</th>
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

export default GovernmentFunds;
