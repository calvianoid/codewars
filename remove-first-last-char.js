function removeChar(str) {
    // let newStr = str.split('');
    // newStr.pop();
    // newStr.shift();
    // return newStr.join('');

    return str.slice(1, -1);
}

console.log(removeChar("country"));
