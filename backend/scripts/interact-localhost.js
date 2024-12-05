const { ethers } = require('ethers');
require('dotenv').config();
const fs = require('fs');
const path = require('path');

async function main() {
    const provider = new ethers.JsonRpcProvider(process.env.LOCALHOST_RPC_URL);
    const signer = new ethers.Wallet(process.env.LOCALHOST_PRIVATE_KEY, provider);

    const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"; // Replace after deployment
    const contractPath = path.resolve(__dirname, '../artifacts/contracts/EM.sol/GrievanceSystem.json');
    const contractJSON = JSON.parse(fs.readFileSync(contractPath, 'utf8'));

    const contract = new ethers.Contract(contractAddress, contractJSON.abi, signer);

    try {
        const balance = await contract.viewBalanceAdminGovt();
        console.log("AdminGovt Balance:", balance.toString());
    } catch (error) {
        console.error("Error calling contract function:", error);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
