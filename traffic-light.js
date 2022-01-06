function updateLight(current) {
    // if (current == "green") {
    //     return "yellow";
    // } else if (current == "yellow") {
    //     return "red";
    // } else if (current == "red") {
    //     return "green";
    // }

    return current === "yellow" ? "red" : current === "green" ? "yellow" : "green";

    // return {
    //   red: 'green',
    //   yellow: 'red',
    //   green: 'yellow'
    // }[current];
}

console.log(updateLight("yellow"));
