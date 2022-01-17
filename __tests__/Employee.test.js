const Employee = require('../lib/employee');

describe('Employee', () => {
    it('should return values of name', () => {
        const testName = "John";
        const testEmployee = new Employee(testName);
      expect(testEmployee.name).toBe(testName);
    });


    it('should return values of id', () => {
        const testId = "01";
        const testEmployee = new Employee("John", testId);
      expect(testEmployee.id).toBe(testId);
    });


    it('should return values of email', () => {
        const testEmail = "john@john.biz";
        const testEmployee = new Employee("John", "01", testEmail);
      expect(testEmployee.email).toBe(testEmail);
    });

    it('should be able to use getName() to get name', () => {
        const testName = "John";
        const testEmployee = new Employee(testName);
      expect(testEmployee.getName()).toBe(testName);
    });

    it('should be able to use getId() to get id', () => {
        const testId = "01";
        const testEmployee = new Employee("John", testId);
      expect(testEmployee.getId()).toBe(testId);
    });

    it('should be able to use getEmail() to get email', () => {
        const testEmail = "john@john.biz";
        const testEmployee = new Employee("John", "01", testEmail);
      expect(testEmployee.getEmail()).toBe(testEmail);
    });

    it('should be able to use getRole() to get role', () => {
        const testRole = "Employee";
        const testEmployee = new Employee("John", "01", "john@jon.biz",testRole);
      expect(testEmployee.getRole()).toBe(testRole);
    });
  
  });