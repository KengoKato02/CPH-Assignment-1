function findLargest(num1, num2, num3, num4) {
 return Math.max(num1, num2, num3, num4);
}

function isWithinRange(number, rangeFrom, rangeTo) {
 return number >= rangeFrom && number <= rangeTo;
}

// find largest
const largest = findLargest(10, 25, 3, 42);
console.log(largest); 

// is within range
const isInRange = isWithinRange(15, 10, 20);
console.log(isInRange); // true

const notInRange = isWithinRange(25, 10, 20);
console.log(notInRange); // false
