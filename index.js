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

function initApp() {
    // Prompt user to create a manager when application starts
    function managerProfile() {
        console.log("Start generating your team profile");
        // Array of questions for user input for manager profile
        inquirer.prompt ([
            {
                type: 'input',
                name: 'manageName',
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
            memberEmail.push = (data.managerEmail);
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



    function engineerProfile() {}
    function internProfile() {}
    function generateHTML() {}
    managerProfile();
}

initApp();