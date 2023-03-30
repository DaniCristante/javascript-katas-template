function replaceText(template, dictionary) {
    var dictionaryKey = Object.keys(dictionary)[0];

    if (dictionary[dictionaryKey] == null) {
        return template.replace(`\${${dictionaryKey}}`, "");
    }

    return template.replace(`\${${dictionaryKey}}`, dictionary[dictionaryKey]);
};

export { replaceText };
