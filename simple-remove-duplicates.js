function solve(arr) {
    // let newArr = [];
    // while (arr.length > 0) {
    //     const pop = arr.pop();
    //     if (!newArr.includes(pop)) {
    //         newArr.push(pop);
    //     }
    // }
    // return newArr.reverse();

    return arr.filter((val, i) => arr.lastIndexOf(val) == i);
}
console.log(solve([3, 4, 4, 3, 6, 3]));
