function sixToast(num) {
    if (num === 6) {
        return 0;
    } else if (num < 6) {
        return 6 - num;
    } else if (num > 6) {
        return num - 6;
    }
}

console.log(sixToast(3)); //0
