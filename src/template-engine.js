function replaceText(template, dictionary) {

    var dictionaryKeys = Object.getOwnPropertyNames(dictionary);

    for (let key in dictionaryKeys) {
        if (template.includes(`\${${dictionaryKeys[key]}}`) == false) {
            throw new Error(`Variable \${${dictionaryKeys[key]}} is not present in template.`);
        }

        template = ReplaceVariable(template, dictionary, dictionaryKeys[key]);
    }

    if (/\${\w+}/.test(template)) {
        throw new Error("Some variables are not replaced.");
    }

    return template;

};

function ReplaceVariable(template, dictionary, dictionaryKey) {
    var outputText = "";

    if (dictionary[dictionaryKey] == null) {
        outputText = template.replace(`\${${dictionaryKey}}`, "");
    } else {
        outputText = template.replace(`\${${dictionaryKey}}`, dictionary[dictionaryKey]);
    }

    return outputText;
}

export { replaceText };
