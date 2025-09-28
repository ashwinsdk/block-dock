# BlockDock

BlockDock is a decentralized e-municipality grievance management system built on the Ethereum blockchain. It enables citizens to file grievances, government administrators to manage funds and projects, and ensures transparency and immutability through blockchain technology.

## Features

- **User Registration and Authentication**: Citizens can register and log in to access the system.
- **Grievance Filing**: Users can submit grievances which are stored on the blockchain.
- **Role-Based Access Control**: Separate dashboards for Users, Admin Heads, and Government Admins.
- **Fund Management**: Government admins can allocate funds to admin heads for projects.
- **Project Tracking**: Admin heads can create and manage ongoing projects.
- **Token-Based Economy**: Internal token system for fund transfers within the system.
- **Transparent Ledger**: All transactions and changes are recorded on the blockchain for auditability.

## Tech Stack

- **Frontend**: React.js with React Router for navigation, Chart.js for data visualization, and Ethers.js for blockchain interaction.
- **Backend/Smart Contracts**: Solidity smart contracts deployed using Hardhat.
- **Blockchain**: Ethereum (compatible with local networks like Hardhat Network).
- **Development Tools**: Hardhat for contract compilation and testing, MetaMask for wallet integration.

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn
- Git
- A web3 wallet like MetaMask (for interacting with the blockchain)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ashwinsdk/block-dock.git
   cd block-dock
   ```

2. **Install Backend Dependencies**:
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**:
   ```bash
   cd ../block-dock
   npm install
   ```

4. **Set Up Environment Variables**:
   - Create a `.env` file in the `backend` directory.
   - Add your Ethereum network configuration (e.g., for local Hardhat network or testnets like Sepolia).

## Deployment

### Deploy Smart Contracts

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Compile the contracts:
   ```bash
   npx hardhat compile
   ```

3. Deploy to local network:
   ```bash
   npx hardhat run scripts/deploy-localhost.js --network localhost
   ```

   Or deploy to a testnet (ensure your `.env` is configured):
   ```bash
   npx hardhat run scripts/deploy.js --network <network-name>
   ```

4. Note the deployed contract address and update the frontend contract JSON files if necessary.

### Run the Application

1. **Start the Backend (Local Blockchain)**:
   ```bash
   cd backend
   npx hardhat node
   ```

2. **Deploy Contracts to Local Network** (in a new terminal):
   ```bash
   cd backend
   npx hardhat run scripts/deploy-localhost.js --network localhost
   ```

3. **Start the Frontend**:
   ```bash
   cd ../block-dock
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### For Users
- Register and log in.
- File grievances through the dashboard.
- View status of submitted grievances.
- Access government funds and ongoing projects information.

### For Admin Heads
- View and update grievance statuses.
- Request funds from government admins.
- Create and manage projects.
- Monitor token balances.

### For Government Admins
- Assign admin heads.
- Approve fund requests.
- View all users, grievances, projects, and fund requests.
- Manage overall system funds.

## Project Structure

```
block-dock/
├── backend/                 # Smart contracts and deployment scripts
│   ├── contracts/           # Solidity contracts (EM.sol)
│   ├── scripts/             # Deployment and interaction scripts
│   └── hardhat.config.js    # Hardhat configuration
├── block-dock/              # React frontend
│   ├── src/
│   │   ├── admin/           # Admin head components
│   │   ├── govt/            # Government admin components
│   │   ├── user/            # User components
│   │   └── App.js           # Main app component
│   └── public/              # Static assets
├── docs/                    # Documentation
└── README.md                # This file
```

## Scripts

### Backend Scripts
- `npx hardhat compile`: Compile smart contracts
- `npx hardhat test`: Run contract tests
- `npx hardhat node`: Start local Ethereum network
- `npx hardhat run scripts/deploy-localhost.js --network localhost`: Deploy to local network

### Frontend Scripts
- `npm start`: Start development server
- `npm run build`: Build for production
- `npm test`: Run tests

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with Hardhat and React
- Inspired by the need for transparent governance systems
- Ethereum community for blockchain infrastructure

## Contact

For questions or support, please open an issue on GitHub or contact the maintainers.
