
const Employee = require('./Employee');

class Intern extends Employee {
    // Intern constructor with argument
    constructor(name, id, email, school) {
        // extending name, id and email from the superclass = employee
        super(name, id, email);
        this.school = school;
    };
    
    // Method to get school name
    getSchool() {
        return this.school;
    }

    // Role method to get role as a intern
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;