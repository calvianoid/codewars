function positiveSum(arr) {
    return arr.filter((angka) => angka > 0).reduce((sum, angka) => sum + angka, 0);
}

console.log(positiveSum([]));
