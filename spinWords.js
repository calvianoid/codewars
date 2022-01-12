function spinWords(string) {
    const pattern = /(\w{5,})/;
    string = string.split(" ");
    let newStr = string.map((el) => {
        if (pattern.test(el) === true) {
            return (el = el.split("").reverse().join(""));
        }
        return el;
    });
    return newStr.join(" ");
}

// console.log(spinWord("Hey fellow warriors"));
console.log(spinWords("This is another test"));
