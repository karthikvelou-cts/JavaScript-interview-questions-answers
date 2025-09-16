const numbers = [50, 30, 100, 120, 49];

// Ascending sort
const asc = [...numbers].sort((a, b) => a - b);
console.log("Ascending:", asc);

// Descending sort
const desc = [...numbers].sort((a, b) => b - a);
console.log("Descending:", desc);

//find method
const find = numbers.find((a)=> a === 100)
console.log("find",find)

//includes method
const include = numbers.includes(120)
console.log("include", include);

//find the index
const index = numbers.indexOf(49)
console.log("index", index);

//using slice
const slice = numbers.slice(0,4)
console.log("slice",slice)

//using splice
const splice = numbers.splice(0,2)
console.log("splice",splice)
