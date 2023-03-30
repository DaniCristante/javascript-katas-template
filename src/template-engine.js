function replaceText(template, dictionary) {

    var replacedTemplate = template;

    var dictionaryKeys = Object.getOwnPropertyNames(dictionary);

    for (let key in dictionaryKeys) {
        replacedTemplate = ReplaceVariable(replacedTemplate, dictionary, dictionaryKeys[key]);
    }

    return replacedTemplate;

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
