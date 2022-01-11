function digital_root(n) {
    if (n.toString().length == 1) {
        return n
            .toString()
            .split("")
            .reduce((sum, el) => sum + parseInt(el), 0);
    } else {
        n = n
            .toString()
            .split("")
            .reduce((sum, el) => sum + parseInt(el), 0);
        return digital_root(n);
    }
}

// console.log(digitalRoot(16)); //7
console.log(digital_root(493193)); //2
