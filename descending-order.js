function descensingOrder(n) {
    return parseInt(
        n
            .toString()
            .split("")
            .sort((a, b) => b - a)
            .join("")
    );
}

console.log(descensingOrder(0));
