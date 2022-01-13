function encode(string) {
    return string.replace(/[aeiou]/g, function (x) {
        return "_aeiou".indexOf(x);
    });
}

function decode(string) {
    return string.replace(/[1-5]/g, function (x) {
        return "_aeiou".charAt(x);
    });
}

console.log(decode("h2ll4")); //'h2ll4'
console.log(encode("How are you today?")); //'H4w 1r2 y45 t4d1y?'
