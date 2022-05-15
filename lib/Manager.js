const Employee = require("./Employee");

class Manager extends Employee {
constructor(name = 'bob manager', id = 0, email = "manager@email.com", officeNumber = 12345) {
    super(name, id, email);
    this.officeNumber = officeNumber;
}      


 getRole() {
     return "Manager";
 }
}

module.exports = Manager;