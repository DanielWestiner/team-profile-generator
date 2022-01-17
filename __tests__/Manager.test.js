const Manager = require('../lib/manager.js');
// const Employee = require('../lib/employee');

describe('Manager', () => {
    it('should return values of office number after passing in name, id, and email', () => {
        const testNumber = "555-555-5555";
        const testManager = new Manager("John", "01", "john@john.biz", testNumber);
      expect(testManager.officeNumber).toBe(testNumber);
    });
  
    it('should be able to use getOfficeNumber() to get office number', () => {
        const testNumber = "555-555-5555";
        const testManager = new Manager("John", "01", "john@john.biz", testNumber);
      expect(testManager.getOfficeNumber()).toBe(testNumber);
    });

    it('should return correct role, Manager, when using getRole()', () => {
        const testRole = "Manager";
        const testManager = new Manager("John", "01", "john@john.biz", "555-555-5555");
      expect(testManager.getRole()).toBe(testRole);
    });
  
  });