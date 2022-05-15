const Engineer = require("../lib/Engineer.js");

test("create engineer object", () =>{
    const engineer = new Engineer("engineer bob" , 1, "exampleengineer@gmail.com", "githubusername");

    expect(engineer.name).toBe("engineer bob");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe("exampleengineer@gmail.com");

});

test("gets engineer's username", () => {
    const engineer = new Engineer();
  
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("gets engineer's role", () => {
    const engineer = new Engineer();
  
    expect(engineer.getRole()).toBe("Engineer");
});
