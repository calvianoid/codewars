function arrayDiff(a, b) {
    if (a.length === 0) {
        return [];
    } else {
        return a.concat(b).filter((el) => !a.includes(el) || !b.includes(el));
    }
}

// console.log(arrayDiff([], [4,5]));
console.log(arrayDiff([1, 8, 2], []));
