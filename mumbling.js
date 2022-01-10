function accum(s) {
    const newStr = [...s];
    return newStr.map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i)).join("-");
}

console.log(accum("abcde")); //A-Bb-Ccc-Dddd
