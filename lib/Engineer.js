const Employee = require('./Employee');

class Engineer extends Employee {
    // Engineer constructor with argument
    constructor(name, id, email, gitHub) {
        // extending name, id and email from the superclass = employee
        super(name, id, email);
        this.gitHub = gitHub;
    };
    
    // Method to get guthub user name
    getGitHub() {
        return this.gitHub;
    }

    // Role method to get role as a engineer
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;