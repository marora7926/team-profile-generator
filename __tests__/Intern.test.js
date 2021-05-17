// can set school via constructor arguments
// getRole() should return "Intern"
// can get school via getSchool()


const Employee = require('../lib/Employee.js');
const Intern = require('../lib/Intern.js');

describe("Initialization", () => {
    // can set school via constructor arguments
    it('Can set school via constructor arguments', () => {
        const employee = new Intern ("jane", 3, "j.doe@bcs.com.au", "Sydney University");
        expect(employee.school).toBe("Sydney University");
    });

    // can get school via getSchool()
    it('Can get school via getSchool()', () => {
        const employee = new Intern ("jane", 3, "j.doe@bcs.com.au", "Sydney University");
        expect(employee.getSchool()).toBe("Sydney University");
    });

    // getRole() should return "Intern"
    it('getRole() should return "Intern"', () => {
        const employee = new Intern ("jane", 3, "j.doe@bcs.com.au", "Sydney University");
        expect(employee.getRole()).toBe("Intern");
    });
});