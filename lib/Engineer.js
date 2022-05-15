const Employee = require("./Employee");

class Engineer extends Employee {
constructor(name = "default engineer", id = 0, email = "engineer@email.com", github = "engineerGithub") {
    super(name, id, email);
    this.github = github;
}      

 getGithub() {
    return this.github;
}

 getRole() {
     return "Engineer";
 }
}

module.exports = Engineer