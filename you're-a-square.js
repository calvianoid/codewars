function square(n) {
    return Math.sqrt(n) % 1 === 0;
}

console.log(square(1)); //false
console.log(square(4)); //true
