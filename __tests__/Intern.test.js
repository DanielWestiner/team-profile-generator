const Intern = require('../lib/intern');


describe('Intern', () => {
    it('should return Github username after passing in name, id, and email', () => {
        const userName = "Github Username";
        const testEngineer = new Engineer("John", "01", "john@john.biz", userName);
      expect(testEngineer.github).toBe(userName);
    });
  
    it('should be able to use getGitHub() to get username', () => {
        const userName = "Github Username";
        const testEngineer = new Engineer("John", "01", "john@john.biz", userName);
      expect(testEngineer.getGithub()).toBe(userName);
    });

    it('should return correct role, Manager, when using getRole()', () => {
        const testRole = "Engineer";
        const testEngineer = new Engineer("John", "01", "john@john.biz", "Github Username");
      expect(testEngineer.getRole()).toBe(testRole);
    });
  
  });