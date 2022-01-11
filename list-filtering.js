function filter_list(arr) {
    return arr.filter((el) => typeof el == "number");
}

console.log(filter_list([1, 2, "a", "b"])); //[1, 2]
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
