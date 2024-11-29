import React from "react";
import { Link } from "react-router-dom";
import "./GovernmentFunds.css";

function GovernmentFunds() {
    const funds = [
        { id: 1, amount: "$500,000", date: "2023-01-10" },
        { id: 2, amount: "$300,000", date: "2023-04-15" },
    ];

    return (
        <div className="layout">
           
            <header className="navbar">
                <div className="navbar-title">E-Municipality</div>
                <div className="navbar-links">
                    <Link to="/" className="navbar-link"></Link>
                </div>
            </header>

            
            <div className="funds-container">
                <h2>Funds Received from Government</h2>
                <table className="funds-table">
                    <thead>
                        <tr>
                            <th>Fund ID</th>
                            <th>Amount</th>
                            <th>Date Received</th>
                        </tr>
                    </thead>
                    <tbody>
                        {funds.map((fund) => (
                            <tr key={fund.id}>
                                <td>{fund.id}</td>
                                <td>{fund.amount}</td>
                                <td>{fund.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            
            <footer className="footer">
                <p>&copy; 2024 E-Municipality. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default GovernmentFunds;
