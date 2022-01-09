function highestAndLowest(numbers) {
    let newNums = numbers.split(" ");
    let sort = newNums.sort(function (a, b) {
        return Number(a) - Number(b);
    });
    return sort[sort.length - 1] + " " + sort[0];
}

console.log(highestAndLowest("1 2 -3 4 5"));
