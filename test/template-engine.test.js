import { replaceText } from '../src/template-engine.js'

it("It replace one variable", () => {
    expect(replaceText("Hello, ${name}!", { name: "John" })).toEqual("Hello, John!");
    expect(replaceText("Hello, ${name}!", { name: "Jane" })).toEqual("Hello, Jane!");
    expect(replaceText("Hello, ${name}!", { name: "Bob" })).toEqual("Hello, Bob!");
    expect(replaceText("Bye, ${name}!", { name: "Alice" })).toEqual("Bye, Alice!");
    expect(replaceText("I'm ${age} years old!", { age: 3 })).toEqual("I'm 3 years old!");
});

it("It replace one variable with null content", () => {
    expect(replaceText("Hello, ${name}!", { name: null })).toEqual("Hello, !");
    expect(replaceText("Bye, ${name}!", { name: "" })).toEqual("Bye, !");
    expect(replaceText("Hello, ${name}!", { name: undefined })).toEqual("Hello, !");
});
