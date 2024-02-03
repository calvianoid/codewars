const x = [1, 2, 3, 4];

function grow(x) {
  return x.reduce((a, b) => a * b);
}

grow(x);
console.log(grow(x));
