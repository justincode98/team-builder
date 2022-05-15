const Employee = require("../lib/Employee.js");

test("create employee object", () =>{
    const employee = new Employee("bob" , 1, "example@gmail.com");

    expect(employee.name).toBe("bob");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe("example@gmail.com");

});

test("gets employee's name", () => {
    const employee = new Employee();
  
    expect(employee.getName()).toEqual(expect.any(String));
});


test("gets employee's id", () => {
    const employee = new Employee();
  
    expect(employee.getID()).toEqual(expect.any(Number));
});

test("gets employee's email", () => {
    const employee = new Employee();
  
    expect(employee.getEmail()).toEqual(expect.any(String));
});

test("gets employee's role", () => {
    const employee = new Employee();
  
    expect(employee.getRole()).toBe("Employee");
});
