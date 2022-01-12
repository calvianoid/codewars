class SmallestIntegerFinder {
    findSmallestInt(arr) {
        return Math.min(...arr);
    }
}
let sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([10, 3, 8, 1, 33])); //8
