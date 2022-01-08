function getCount(str) {
    var vowelsCount = 0;
    const newStr = str.split("");
    newStr.map((el) => {
        const pattern = /[aiueo]/;
        if (pattern.test(el) === true) {
            vowelsCount += 1;
        }
    });
    return vowelsCount;
}

console.log(getCount("abracadabra"));
