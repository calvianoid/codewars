function makeNegative(num) {
    // if(num > 0){
    //   return num * -1;
    // } return num * 1;

    // return -Math.abs(num);

    return num < 0 ? num : -num;
}

console.log(makeNegative(-2));
