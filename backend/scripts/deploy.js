const { ethers } = require('ethers');
require('dotenv').config();
const signer = require('fs');
const path = require('path');

async function main() {
    const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
    const signer = new ethers.Wallet(process.env.SEPOLIA_PRIVATE_KEY, provider);

    const contractPath = path.resolve(__dirname, '../artifacts/contracts/EM.sol/GrievanceSystem.json');
    const contractJSON = JSON.parse(fs.readFileSync(contractPath, 'utf8'));

    const GrievanceSystem = new ethers.ContractFactory(contractJSON.abi, contractJSON.bytecode, signer);

    console.log("Deploying contract...");
    const contract = await GrievanceSystem.deploy();
    await contract.waitForDeployment(); // Corrected for ethers.js v6

    console.log("Contract deployed at address:", contract.target); // Use `target` for the deployed address in v6
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
