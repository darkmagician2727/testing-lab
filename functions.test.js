const functions = require("./functions.js");

test("Should return 2", () => {
    expect(functions.returnTwo()).toBe(2);
});

test("Should return 'Hello, James'", () => {
    expect(functions.greeting("James")).toBe("Hello, James");
});

test("Should return 'Hello, Jill'", () => {
    expect(functions.greeting("Jill")).toBe("Hello, Jill");
});

test("Should return 3", () => {
    expect(functions.add(1, 2)).toBe(3);
});

test("Should return 14", () => {
    expect(functions.add(5, 9)).toBe(14);
});
