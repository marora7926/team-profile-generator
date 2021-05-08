class Employee {
    // Employee constructor with argument
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    };
    
    // Name method to get name
    getName() {
        return this.name;
    }

    // Id method to get name
    getId() {
        return this.id;
    }

    // Email method to get name
    getEmail() {
        return this.email;
    }

    // Role method to get name
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee