const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  internSchool() {
    return this.school;
  }

  teamRole() {
    return "Intern";
  }
}

module.exports = Intern;
 