function replaceText(template, dictionary) {
    // return "Hello, ${name}!";
    return template.replace("${name}", dictionary.name);
}

export { replaceText };
