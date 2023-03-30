function replaceText(template, dictionary) {

    var outputText = template;

    var objectKeys = Object.getOwnPropertyNames(dictionary);

    for (let key in objectKeys) {
        outputText = ReplaceVariable(outputText, dictionary, objectKeys[key]);
    }
    
    return outputText;

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
