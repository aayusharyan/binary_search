import binarySearch from "./index.js";

console.assert(binarySearch([1, 2, 3, 4, 5], 1) === 0, "This is testcase 1");
console.assert(binarySearch([1, 2, 3, 4, 5], 3) === 2, "This is testcase 2");
console.assert(binarySearch([1, 2, 3, 4, 5], 5) === 4, "This is testcase 3");
console.assert(binarySearch([1, 2, 3, 4, 5], 7) === -1, "This is testcase 4");