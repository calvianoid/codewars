function convertCamelCase(str) {
    str = str.split(/[-_]/);
    let newStr = str.map((el) => {
        if (el === str[0]) {
            return el;
        } else {
            return el[0].toUpperCase() + el.slice(1);
        }
    });
    return newStr.join("");
}

console.log(convertCamelCase("The_Stealth_Warrior"));
