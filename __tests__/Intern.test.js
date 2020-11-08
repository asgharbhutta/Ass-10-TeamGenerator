const Intern = require("../lib/Intern");

test("Can set github account via constructor", () => {
    const testValue = "UCLA";
    const e = new Intern ("Foo",1,"test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return Intern", () => {
    const testValue = "Intern";
    const e = new Intern ("Foo",1,"test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("can get school", () => {
    const testValue = "UCLA";
    const e = new Intern ("Foo",1,"test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});