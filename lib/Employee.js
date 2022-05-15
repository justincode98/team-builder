class Employee {
    constructor(name = '', id = 0, email = "placeholder@email.com") {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
        return this.name;
    }
  
    getID() {
        return this.id;
    }

    getEmail() {
      return this.email;
    }

    getRole() {
      return "Employee";
    }

   /* getProp() {
      return {
        name: this.name,
        id: this.id,
        email: this.email
      };
    }
*/
}
/*
const ei = new Employee("dav");
console.log(ei); //to run, type node lib/Employee.js
*/
 module.exports = Employee;