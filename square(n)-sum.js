function squareSum(numbers) {
    return numbers.reduce((result, el) => result + Math.pow(el, 2), 0);
}

console.log(squareSum([0, 3, 4, 5])); //5
