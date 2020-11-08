const Employee = require("../lib/Employee");

test("Can Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("get name constructor", () => {
    const testValue = "Alice";
    const e = new Employee(name)
    expect(e.name).toBe(name);
});

test("can set id via constructor", () => {
    const testValue = 100;
    const e = new Employee ("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test("can set email via constructor", () => {
    const testValue = "test@test.com";
    const e = new Employee ("Foo",1, testValue);
    expect(e.email).toBe(testValue);
});

test("can set name via getName()", () => {
    const testValue = "Alice";
    const e = new Employee (testValue);
    expect(e.getName()).toBe(testValue);
});

test("can get id via getId", () => {
    const testValue = 100;
    const e = new Employee ("Foo", testValue);
    expect(e.getId).toBe(testValue);
});