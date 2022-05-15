const Manager = require("../lib/Manager.js");

test("create employee object", () =>{
    const manager = new Manager("manager bob" , 1, "examplemanager@gmail.com", 13579);

    expect(manager.name).toBe("manager bob");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe("examplemanager@gmail.com");
    expect(manager.id).toEqual(expect.any(Number));

});


test("gets manager's role", () => {
    const manager = new Manager();
  
    expect(manager.getRole()).toBe("Manager");
});
