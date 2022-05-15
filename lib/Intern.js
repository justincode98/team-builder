const Employee = require("./Employee");

class Intern extends Employee {
 constructor(name = 'bob intern', id = 0, email = "placeholderintern@email.com", school = "intern school") {
     super(name, id, email);
     this.school = school;
 }   

 getSchool() {
    return this.school;
}

 getRole() {
     return "Intern";
 }
}

module.exports = Intern