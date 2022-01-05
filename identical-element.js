function duplicateElements(m, n) {
    const newArr = [...m, ...n];
    console.log(newArr);
    return new Set(newArr).size !== newArr.length;
}

console.log(duplicateElements([1, 2], [1, 3]));
