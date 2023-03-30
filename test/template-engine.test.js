import { replaceText } from '../src/template-engine.js'

it("It replace one variable", () => {
    expect(replaceText("Hello, ${name}!", { name: "John" })).toEqual("Hello, John!");
    expect(replaceText("Hello, ${name}!", { name: "Jane" })).toEqual("Hello, Jane!");
    expect(replaceText("Hello, ${name}!", { name: "Bob" })).toEqual("Hello, Bob!");
    expect(replaceText("Bye, ${name}!", { name: "Alice" })).toEqual("Bye, Alice!");
});

it("It replace one variable with null content", () => {
    expect(replaceText("Hello, ${name}!", { name: null })).toEqual("Hello, !");
});
