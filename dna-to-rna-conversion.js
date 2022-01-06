function DNAtoRNA(dna) {
    return dna
        .split("")
        .map((dna) => {
            switch (dna) {
                case "T":
                    return "U";
                default:
                    return dna;
            }
        })
        .join("");
}

console.log(DNAtoRNA("TTTT"));
