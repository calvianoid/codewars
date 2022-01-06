function createPhoneNumber(arr) {
    const regex = /^([0-9]{3})([0-9]{3})([0-9]{4})/;
    return arr.join("").toString().replace(regex, "($1) $2-$3");
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// (123) 456-7890
