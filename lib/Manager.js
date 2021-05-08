
const Employee = require('./Employee');

class Manager extends Employee {
    // Manager constructor with argument
    constructor(name, id, email, officeNumber) {
        // extending name, id and email from the superclass = employee
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
    
    // Name method to get office number
    getOfficeNumber() {
        return this.officeNumber;
    }

    // Role method to get role as a manager
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;