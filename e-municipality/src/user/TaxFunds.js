import React from "react";
import "./GovernmentFunds.css"; 

function TaxFunds() {
    const taxFunds = [
        { id: 1, amount: "$150,000", date: "2023-02-10" },
        { id: 2, amount: "$200,000", date: "2023-03-20" },
    ];

    return (
        <div className="funds-container">
            <h2>Funds Received from Tax</h2>
            <table className="funds-table">
                <thead>
                    <tr>
                        <th>Fund ID</th>
                        <th>Amount</th>
                        <th>Date Received</th>
                    </tr>
                </thead>
                <tbody>
                    {taxFunds.map((fund) => (
                        <tr key={fund.id}>
                            <td>{fund.id}</td>
                            <td>{fund.amount}</td>
                            <td>{fund.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TaxFunds;
