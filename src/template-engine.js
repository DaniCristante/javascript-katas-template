function replaceText(template, dictionary) {
    var dictionaryKey = Object.keys(dictionary)[0];

    var outputText = ReplaceVariable(template, dictionary, dictionaryKey);

    dictionaryKey = Object.keys(dictionary)[1];

    outputText = ReplaceVariable(outputText, dictionary, dictionaryKey);

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
