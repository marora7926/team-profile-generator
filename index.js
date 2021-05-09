// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const htmlTemplate = require('./src/html-template.js');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// create empty array to store data
const teamRole = [];
const memberName = [];
const idNumber = [];
const memberEmail = [];
const otherData = [];

function initApp() {
    // Prompt user to create a manager when application starts
    function managerProfile() {
        console.log("Start generating your team profile");
        // Array of questions for user input for manager profile
        inquirer.prompt ([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the team manager's name?",
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is the team manager's Id?",
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the team manager's email?",
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the team manager's office number? (format: 1111111111)",
            },
        // this will return a promise
        ]).then(data => {
            const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber);
            teamRole.push(manager);
            memberName.push(data.managerName);
            idNumber.push(data.managerId);
            memberEmail.push(data.managerEmail);
            otherData.push(data.officeNumber);
            console.log("Storing details of manager")
            addOtherMembers();
        });
    };

    function addOtherMembers() {
        inquirer.prompt([
            {
                type: "list",
                name: "roleOptions",
                message: "Which type of team member would you like to add?",
                choices: ["Engineer", "Intern", "I don't want to add any more team members"]
            }
        ]).then(selectedAnswer => {
            switch (selectedAnswer.roleOptions) {
                case "Engineer":
                    engineerProfile();
                    break;
                case "Intern":
                    internProfile();
                    break;
                default:
                    generateHTML();
            }
        });
    }

    function engineerProfile() {
        inquirer.prompt ([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name?",
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is the engineer's Id?",
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the engineer's email?",
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's github id?",
            },
        // this will return a promise
        ]).then(data => {
            const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.github);
            teamRole.push(engineer);
            memberName.push(data.engineerName);
            idNumber.push(data.engineerId);
            memberEmail.push(data.engineerEmail);
            otherData.push(data.github);
            console.log("Storing details of engineer")
            addOtherMembers();
        });
    };
    
    function internProfile() {
        inquirer.prompt ([
            {
                type: 'input',
                name: 'internName',
                message: "What is the intern's name?",
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is the intern's Id?",
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the intern's email?",
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school?",
            },
        // this will return a promise
        ]).then(data => {
            const intern = new Intern(data.internName, data.internId, data.internEmail, data.school);
            teamRole.push(intern);
            memberName.push(data.internName);
            idNumber.push(data.internId);
            memberEmail.push(data.internEmail);
            otherData.push(data.school);
            console.log("Storing details of intern")
            console.log(memberName)
            console.log(idNumber)
            console.log(memberEmail)
            console.log(otherData)
            addOtherMembers();
        });
    };
    function generateHTML() {

    }
    
    managerProfile();
}

initApp();