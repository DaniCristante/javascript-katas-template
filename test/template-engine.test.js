import { replaceText } from '../src/template-engine.js'

it("It replace one variable", () => {
    expect(replaceText("Hello, ${name}!", { name: "John" })).toEqual("Hello, John!");
    expect(replaceText("Hello, ${name}!", { name: "Jane" })).toEqual("Hello, Jane!");
    expect(replaceText("Hello, ${name}!", { name: "Bob" })).toEqual("Hello, Bob!");
});
