const Employee = require('../lib/Employee');

describe("Initialization", () => {
    // can instantiate Employee instance
    it('Can instantiate Employee instance', () => {
        const employee = new Employee ();
        expect(typeof employee).toBe("object");
    });

    // can set name via constructor arguments
    it('Can set name via constructor arguments', () => {
        const employee = new Employee ("David");
        expect(employee.name).toBe("David");
    });

    // can set id via constructor arguments
    it('Can set id via constructor arguments', () => {
        const employee = new Employee ("David", 1);
        expect(employee.id).toBe(1);
    });

    // can set email via constructor arguments
    it('Can set email via constructor arguments', () => {
        const employee = new Employee ("David", 1, "d.impey@bcs.com.au");
        expect(employee.email).toBe("d.impey@bcs.com.au");
    });

    // can get name via getName()
    it('Can get name via getName()', () => {
        const employee = new Employee ("David", 1, "d.impey@bcs.com.au");
        expect(employee.getName()).toBe("David");
    });
    
    // can get id via getId()
    it('Can get id via getId()', () => {
        const employee = new Employee ("David", 1, "d.impey@bcs.com.au");
        expect(employee.getID()).toBe(1);
    });
    
    // can get email via getEmail()
    it('Can get email via getEmail()', () => {
        const employee = new Employee ("David", 1, "d.impey@bcs.com.au");
        expect(employee.getEmail()).toBe("d.impey@bcs.com.au");
    });
    
    // getRole() should return "Employee"
    it('getRole() should return "Employee"', () => {
        const employee = new Employee ("David", 1, "d.impey@bcs.com.au");
        expect(employee.getRole()).toBe("Employee");
    });
});