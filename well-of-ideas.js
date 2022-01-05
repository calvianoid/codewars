function well(x) {
    let good = 0;
    let bad = 0;
    x.map((el) => {
        if (el === "good") {
            good += 1;
        } else {
            bad = +1;
        }
    });

    if (good === 0) {
        return "Fail!";
    } else if (good >= 1 && good <= 2) {
        return "Publish!";
    } else if (good > 2) {
        return "I smell a series!";
    }
}

console.log(well(["good", "good", "good"]));
