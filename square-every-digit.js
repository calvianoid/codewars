function square(digit) {
    let newDigit = digit
        .toString()
        .split("")
        .map((el) => el * el)
        .join("");
    return parseInt(newDigit);
}

console.log(square(3212));
