// const likes = (names) => {
//   if (names.length === 0) {
//     return "no one likes this";
//   }

//   if (names.length === 1) {
//     return `${names[0]} likes this`;
//   }

//   if (names.length === 2) {
//     return `${names[0]} and ${names[1]} like this`;
//   }

//   if (names.length === 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   }

//   if (names.length > 3) {
//     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//   }

//   return names;
// };

const likes = (names) => {
  switch (names.length) {
    case 0:
      return `no one likes this`;
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
};

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Peter", "Jacob"]));
console.log(likes(["Peter", "Jacob", "Solos"]));
console.log(likes(["Peter", "Jacob", "Solos", "Nadus"]));
console.log(likes(["Peter", "Jacob", "Solos", "Nadus", "Josep"]));
