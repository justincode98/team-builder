const Intern = require("../lib/Intern.js");

test("create employee object", () =>{
    const intern = new Intern("intern bob" , 1, "exampleintern@gmail.com", "University of Lipsum");

    expect(intern.name).toBe("intern bob");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe("exampleintern@gmail.com");

});

test("gets intern's school", () => {
    const intern = new Intern();
  
    expect(intern.getSchool()).toEqual(expect.any(String));
});

test("gets intern's role", () => {
    const intern = new Intern();
  
    expect(intern.getRole()).toBe("Intern");
});
