const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');

describe("Initialization", () => {
    // can set GitHub account via constructor arguments
    it('Can set GitHub account via constructor arguments', () => {
        const employee = new Engineer ("mohit", 2, "m.arora@bcs.com.au", "maro7926");
        expect(employee.gitHub).toBe("maro7926");
    });

    // can get GitHub username via getGitHub()
    it('Can get GitHub username via getGitHub()', () => {
        const employee = new Engineer ("mohit", 2, "m.arora@bcs.com.au", "maro7926");
        expect(employee.getGitHub()).toBe("maro7926");
    });

    // getRole() should return "Engineer"
    it('getRole() should return "Manager"', () => {
        const employee = new Engineer ("mohit", 2, "m.arora@bcs.com.au", "maro7926");
        expect(employee.getRole()).toBe("Engineer");
    });
});