function findOddInt(arr) {
    // let count = 0;
    // let newArr = arr.sort((a, b) => a - b);
    // for (let i = 0; i < newArr.length; i++) {
    //     for (let j = 0; j < newArr.length; j++) {
    //         if (newArr[i] == newArr[j]) {
    //             count++;
    //         }
    //     }
    //     if (count % 2 !== 0) {
    //         return newArr[i];
    //     }
    // }

    return arr.reduce((a, b) => a ^ b);
}

// console.log(findOddInt([7])); //1
console.log(findOddInt([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); //5
// console.log(findOddInt([1, 1, 2])); //2
