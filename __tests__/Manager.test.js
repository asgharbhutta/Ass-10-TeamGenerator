const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set github account via constructor", () => {
    const testValue = 100;
    const e = new Intern ("Foo",1,"test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return Manager", () => {
    const testValue = "Manager";
    const e = new Intern ("Foo",1,"test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("can get officenumber", () => {
    const testValue = "100";
    const e = new Intern ("Foo",1,"test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});