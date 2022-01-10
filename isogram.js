function isIsogram(str) {
    const newStr = str.toLowerCase();
    return newStr.split("").every((el, index) => newStr.indexOf(el) == index);
}

console.log(isIsogram("isogram"));
