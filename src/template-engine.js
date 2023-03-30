function replaceText(template, dictionary) {
    if (dictionary.name === null) {
        return template.replace("${name}", "");
    }
    return template.replace("${name}", dictionary.name);
};

export { replaceText };
