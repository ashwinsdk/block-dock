# Block-Dock

A Blockchain-Based Urban Grievance Redressal and Fund Management System

<img width="1470" alt="index" src="https://github.com/user-attachments/assets/115fc9f7-ecee-44a4-a54c-7d11181988cb">

<img width="1470" alt="user-home" src="https://github.com/user-attachments/assets/e7b24914-924c-4e3b-bff6-1c45d9722fe4">

## Problem Statement
Urban municipalities often face challenges in grievance management, fund allocation, and tax collection. Traditional systems lack transparency, experience frequent delays, and provide limited visibility into the utilization of funds and ongoing projects. 

## Solution
Block-Dock is a blockchain-based governance platform that enhances transparency, efficiency, and security in urban administrative processes. The platform introduces role-based access control and immutable records to ensure seamless operations for grievance redressal, fund allocation, and project management.

## Key Features
### User Roles
- **Users**: Urban residents who can:
  - File grievances and track their status.
  - View project details and information about AdminHead.
  
- **AdminHead** (Municipality Head): Responsible for:
  - Requesting tokens from AdminGovt with purpose and amount.
  - Managing grievances by updating their status (Accepted/Rejected).
  - Creating and managing projects with details like name, due date, and contractor information.
  - Searching user information dynamically.

- **AdminGovt** (Government Officer): Responsible for:
  - Approving or denying token requests from AdminHead.
  - Monitoring grievance records and user details.
  - Viewing all projects and transaction histories.

### Blockchain Features
1. **Role-Based Access Control**: Ensures data integrity and restricted operations based on user roles.
2. **Token System**: Implements an ERC20-compatible token for fund transfers. 
3. **Immutable Records**: Grievances, projects, and transactions are securely logged on the blockchain.
4. **Wallet Authentication**: MetaMask integration enables secure and role-specific functionalities.

## Tech Stack
- **Blockchain**: Solidity (v0.8.26), Sepolia Testnet
- **Frontend**: React.js (v18.2.0), CSS
- **Backend**: Node.js (v18.x)
- **Smart Contract Framework**: Hardhat (v2.17.0)
- **Wallet Integration**: MetaMask

## Approach
### Smart Contract Development
1. **Role Definition**: 
   - Implemented roles for AdminGovt, AdminHead, and Users using access control.
2. **Token System**: 
   - Developed ERC20-compatible tokens for fund management with logged transaction histories.
3. **Grievance Management**: 
   - Structured grievances with fields for user details, descriptions, and status updates.
4. **Project Management**: 
   - Created project records with name, due time, and contractor details visible to all users.

### Frontend Development
Built a dynamic UI using React.js with the following features:
- **Users**:
  - Register and log in via wallet.
  - File grievances and track status.
  - View project details.
- **AdminHead**:
  - Request tokens and manage grievances.
  - Create and manage projects.
  - Search user information.
- **AdminGovt**:
  - Approve/deny token requests.
  - Monitor grievances and transaction histories.

### Blockchain Integration
1. **MetaMask**: Wallet connection and role-based functionalities.
2. **Smart Contract Deployment**: Tested and deployed contracts on the Sepolia testnet using Hardhat.

## Prerequisites
- Knowledge of blockchain concepts (smart contracts, wallets, tokens).
- Understanding of React.js and JavaScript.
- Installed tools:
  - Node.js and npm
  - MetaMask browser extension
  - Hardhat for contract development and deployment

## Tools and Versions
- **Solidity**: v0.8.26
- **React.js**: v18.2.0
- **Node.js**: v18.x
- **Hardhat**: v2.17.0
- **MetaMask**
- **Sepolia Testnet**

## Quick Links
- **Google Drive**: [Block-Dock](https://drive.google.com/drive/folders/1l-qS6hGMx8savHD_4XNx7dWVMpCFE7DN?usp=sharing)
- **GitHub Repository**: [Block-Dock](https://github.com/ashwinsdk/block-dock)
  
## Reference links
- **Hardhat Documentation**: [Getting Started](https://hardhat.org/hardhat-runner/docs/getting-started)
- **Web3.js Documentation**: [Web3.js Docs](https://web3js.readthedocs.io/en/v1.10.0/)
- **Ethers.js Documentation**: [Ethers.js Docs](https://docs.ethers.org/v5/getting-started/)
- **MetaMask Documentation**: [MetaMask Docs](https://developer.metamask.io/)
- **OpenAI**: [Chatgpt](https://chat.openai.com/)
- **Youtube**: [yt](https://www.youtube.com/)

## Contributors
- **Ashwin Sudhakar**: Back-end, smart contract development, integration, Front-end UI.
- **Vishal Sagar Murthy**: Back-end, deployment.
- **Adarsh BM**: Front-end development.
- **Sanjana SN**: Front-end development.


---
