const numberList = [1, 10, 14, 2, 4, 5, 43, 34];
const sortedArray = [...numberList].sort((a, b) => a - b);

console.log('Original array:', numberList);
console.log('Sorted array:', sortedArray);