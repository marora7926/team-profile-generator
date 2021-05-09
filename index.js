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

    addManager();
    function addOtherMembers() {}
    function addEngineer() {}
    function addIntern() {}
    function generateHTML() {}


//   {
//     type: 'checkbox',
//     name: 'tech',
//     message: 'What technologies were used for this project?',
//     choices: ["HTML", "CSS", "Bootstrap", "JavaScript", "Node", "NPM"]
// },
// {
//     type: 'input',
//     name: 'gUsername',
//     message: 'What is your github id?',
// },
// {
//     type: 'input',
//     name: 'email',
//     message: 'What is your email id?',
// },