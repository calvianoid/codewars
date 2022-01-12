function countSheeps(arrayOfSheeps) {
    // let result = 0;
    // arrayOfSheeps.map((el) => {
    //     if (el === true) {
    //         result++;
    //     }
    // });
    // return result;

    return arrayOfSheeps.filter(Boolean).length;
}

console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]));
