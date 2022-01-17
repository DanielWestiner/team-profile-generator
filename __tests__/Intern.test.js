const Intern = require('../lib/intern');


describe('Intern', () => {
    it('should return school name after passing in name, id, and email', () => {
        const testSchool = "UPenn";
        const intern = new Intern("John", "01", "john@john.biz", testSchool);
      expect(intern.school).toBe(testSchool);
    });
  
    it('should be able to internSchool to get school', () => {
        const testSchool = "UPenn";
        const intern = new Intern("John", "01", "john@john.biz", testSchool);
      expect(intern.internSchool()).toBe(testSchool);
    });

    it('should return correct role, Intern, when using teamRole()', () => {
        const testRole = "Intern";
        const intern = new Intern("John", "01", "john@john.biz", "UPenn");
      expect(intern.teamRole()).toBe(testRole);
    });
  
  });