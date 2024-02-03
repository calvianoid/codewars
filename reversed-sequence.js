const n = 5;

// const reverseSeq = (n) => {
//   const result = [];
//   for (let i = n; i >= 1; i--) {
//     result.push(i);
//   }

//   return result;
// };

// const reverseSeq = (n) => [...Array(n)].map((item, index) => index + 1).reverse();

// const reverseSeq = (n) => [...Array(n)].map((item, index) => n - index);

const reverseSeq = (length) => Array.from({ length }, () => length--);

console.log(reverseSeq(n));
