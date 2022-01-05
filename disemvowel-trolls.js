function disemvowel(str) {
    return (newStr = str.replace(/[aiueo]/gi, ""));
}

console.log(disemvowel("This website is for losers LOL!"));
