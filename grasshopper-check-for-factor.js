function checkForFactor(base, factor) {
    if (base % factor === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkForFactor(9, 2));
