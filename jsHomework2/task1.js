const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0, negativeCount = 0, zeroCount = 0;

for (const num of numbers) {
  if (num > 0) positiveCount++;
  else if (num < 0) negativeCount++;
  else zeroCount++;
}

console.log(`Number of positive numbers: ${positiveCount}`);
console.log(`Number of negative numbers: ${negativeCount}`);
console.log(`Number of zero numbers: ${zeroCount}`);


