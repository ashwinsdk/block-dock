// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract GrievanceSystem {
    // Define roles
    address public adminGovt;
    address public adminHead;

    // Token balance mapping
    mapping(address => uint256) public tokenBalance;
    uint256 public totalSupply = 10000; // AdminGovt starts with 10,000 tokens

    // User data structure
    struct User {
        string name;
        string email;
        string dob;
        string mobile;
    }

    mapping(address => User) public users;

    // Grievance data structure
    struct Grievance {
        string name;
        string details;
        string status; // PENDING, ACCEPTED, REJECTED
        address user;
    }

    Grievance[] public grievances;

    // Project data structure
    struct Project {
        string pname;
        string details;
        uint256 customFund;
        string status; // ONGOING, DONE
        address adminHead;
    }

    Project[] public projects;

    // Fund Request data structure
    struct FundRequest {
        uint256 amount;
        string status; // NOTPAID, PAID
        address adminHead;
    }

    FundRequest[] public fundRequests;

    // Events
    event TokensTransferred(address from, address to, uint256 amount);
    event FundRequestCreated(address adminHead, uint256 amount);
    event FundRequestStatusChanged(uint256 requestId, string status);
    event ProjectCreated(address adminHead, string pname, uint256 customFund);
    event ProjectStatusChanged(uint256 projectId, string status);

    // Constructor initializes the contract with total supply
    constructor() {
        adminGovt = msg.sender; // Set the deployer as AdminGovt
        tokenBalance[adminGovt] = totalSupply; // Assign all tokens to AdminGovt
    }

    // Modifiers for restricting access
    modifier onlyAdminGovt() {
        require(
            msg.sender == adminGovt,
            "Only AdminGovt can perform this action."
        );
        _;
    }

    modifier onlyAdminHead() {
        require(
            msg.sender == adminHead,
            "Only AdminHead can perform this action."
        );
        _;
    }

    // User Functions

    address[] public registeredUsers; // Array of registered users' addresses

    // Add a user when they register
    function registerUser(
        address _userAddress,
        string memory _name,
        string memory _email,
        string memory _dob,
        string memory _mobile
    ) public {
        users[_userAddress] = User({
            name: _name,
            email: _email,
            dob: _dob,
            mobile: _mobile
        });
        registeredUsers.push(_userAddress); // Add to registered users array
    }

    // File grievance
    function fileGrievance(string memory _name, string memory _details) public {
        grievances.push(
            Grievance({
                name: _name,
                details: _details,
                status: "PENDING",
                user: msg.sender
            })
        );
    }

    // View all grievances
    function viewGrievances() public view returns (Grievance[] memory) {
        return grievances;
    }

    // View AdminHead details
    function viewAdminHeadDetails() public view returns (address) {
        return adminHead;
    }

    // AdminHead Functions

    // Login and view balance (AdminHead)
    function viewBalanceAdminHead()
        public
        view
        onlyAdminHead
        returns (uint256)
    {
        return tokenBalance[msg.sender];
    }

    // View all grievances (AdminHead) and edit status (ACCEPTED or REJECTED)
    function viewAndEditGrievances(
        uint256 grievanceIndex,
        string memory _status
    ) public onlyAdminHead {
        Grievance storage grievance = grievances[grievanceIndex];
        require(grievance.user != address(0), "Invalid grievance index.");
        grievance.status = _status;
    }

    // Request funds from AdminGovt
    function requestFunds(uint256 _amount) public onlyAdminHead {
        require(_amount > 0, "Amount must be greater than 0.");
        fundRequests.push(
            FundRequest({
                amount: _amount,
                status: "NOTPAID",
                adminHead: msg.sender
            })
        );
        emit FundRequestCreated(msg.sender, _amount);
    }

    // Create a project
    function createProject(
        string memory _pname,
        string memory _details,
        uint256 _customFund
    ) public onlyAdminHead {
        require(
            tokenBalance[adminGovt] >= _customFund,
            "Insufficient balance in AdminGovt to allocate custom funds."
        );

        // Transfer the custom fund amount from AdminGovt to AdminHead
        tokenBalance[adminGovt] -= _customFund;
        tokenBalance[adminHead] -= _customFund;

        projects.push(
            Project({
                pname: _pname,
                details: _details,
                customFund: _customFund,
                status: "ONGOING",
                adminHead: msg.sender
            })
        );

        emit ProjectCreated(msg.sender, _pname, _customFund);
        emit TokensTransferred(adminGovt, adminHead, _customFund); // Emit event for the transfer
    }

    // Edit project status (e.g., change to DONE)
    function editProjectStatus(
        uint256 projectId,
        string memory _status
    ) public onlyAdminHead {
        Project storage project = projects[projectId];
        require(
            project.adminHead == msg.sender,
            "Only the creator can edit this project."
        );
        project.status = _status;
        emit ProjectStatusChanged(projectId, _status);
    }

    // Now you can loop over the registeredUsers array
    function viewAllUsers() public view returns (User[] memory) {
        User[] memory allUsers = new User[](registeredUsers.length);
        for (uint i = 0; i < registeredUsers.length; i++) {
            allUsers[i] = users[registeredUsers[i]];
        }
        return allUsers;
    }

    // AdminGovt Functions

    // Login and view balance (AdminGovt)
    function viewBalanceAdminGovt()
        public
        view
        onlyAdminGovt
        returns (uint256)
    {
        return tokenBalance[msg.sender];
    }

    // Assign AdminHead
    function assignAdminHead(address _adminHead) public onlyAdminGovt {
        adminHead = _adminHead;
    }

    // View all fund requests
    function viewFundRequests() public view returns (FundRequest[] memory) {
        return fundRequests;
    }

    // Send tokens to AdminHead based on fund request
    function sendTokensToAdminHead(uint256 _requestId) public onlyAdminGovt {
        require(_requestId < fundRequests.length, "Invalid request ID.");
        FundRequest storage request = fundRequests[_requestId];

        // Ensure the request is not already paid
        require(
            keccak256(abi.encodePacked(request.status)) ==
                keccak256(abi.encodePacked("NOTPAID")),
            "Request already paid."
        );
        require(
            tokenBalance[adminGovt] >= request.amount,
            "Insufficient balance to send tokens."
        );

        // Transfer tokens from AdminGovt to AdminHead
        tokenBalance[adminGovt] -= request.amount;
        tokenBalance[request.adminHead] += request.amount;

        // Update request status to PAID
        request.status = "PAID";

        emit FundRequestStatusChanged(_requestId, "PAID");
        emit TokensTransferred(adminGovt, request.adminHead, request.amount);
    }

    // View all projects (AdminGovt)
    function viewAllProjects() public view returns (Project[] memory) {
        return projects;
    }
}
