// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let num = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let remove = [...new Set(num)];
console.log("-------------------------------------------------")
console.log("remove-duplicates", remove);
let duplicate = []
let duplicates = num.reduce((acc, val, _, arr) => {
    // Count how many times val appears in the array
    let count = arr.filter(x => x === val).length;

    // If count > 1 and not already in acc, it's a duplicate
    if (count > 1 && !acc.includes(val)) {
        acc.push(val);
    }

    return acc;
}, []);
console.log("-------------------------------------------------")
console.log("duplicates", duplicates);
console.log("-------------------------------------------------")
let maximum = num.reduce((acc, n) => {
    return Math.max(acc, n);
});

console.log("max value", maximum);
console.log("-------------------------------------------------")
let minimum = num.reduce((acc, n) => {
    return Math.min(acc, n);
});

console.log("min value", minimum);
console.log("-------------------------------------------------")


num = [1, 2, 3, 4, 5, 4, 5, 4, 3, 2, 1];

// Step 1: Count occurrences using reduce
let frequency = num.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
}, {});

// Step 2: Find highest and lowest occurrence
let entries = Object.entries(frequency);

let highest = entries.reduce((max, curr) => curr[1] > max[1] ? curr : max);
let lowest = entries.reduce((min, curr) => curr[1] < min[1] ? curr : min);
console.log("Frequency Map:", frequency);
console.log("-------------------------------------------------")
console.log("Highest Occurrence:", highest[0], "→", highest[1], "times");
console.log("-------------------------------------------------")
console.log("Lowest Occurrence:", lowest[0], "→", lowest[1], "time");
console.log("-------------------------------------------------")


