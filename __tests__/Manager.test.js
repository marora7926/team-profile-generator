const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');

describe("Initialization", () => {
    // can set office number via constructor arguments
    it('Can set office number via constructor arguments', () => {
        const manager = new Manager ("David", 1, "d.impey@bcs.com.au", 98765432);
        expect(employee.officeNumber).toBe(98765432);
    });

    // can get office number via getOfficeNumber()
    it('Can get office number via getOfficeNumber()', () => {
        const manager = new Manager ("David", 1, "d.impey@bcs.com.au", 98765432);
        expect(employee.getOfficeNumber()).toBe(98765432);
    });

    // getRole() should return "Manager"
    it('getRole() should return "Manager"', () => {
        const manager = new Manager ("David", 1, "d.impey@bcs.com.au", 98765432);
        expect(employee.getRole()).toBe("Manager");
    });
});