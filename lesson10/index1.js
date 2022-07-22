const getFiniteNumbers = (arr) => arr.filter((num) => Number.isFinite(num));

const getFiniteNumbersV2 = (arr) => arr.filter((num) => isFinite(num));
const getNaN = (arr) => arr.filter((num) => Number.isNaN(num));
const getNaNV2 = (arr) => arr.filter((num) => isNaN(num));
const getIntegers = (arr) => arr.filter((num) => Number.isInteger(num));

const arr = [1, 5, 6, 7, 8, '9', 76, 5, 4, 3, 2];

console.log(getFiniteNumbers(arr));
console.log(getFiniteNumbersV2(arr));
console.log(getNaN(arr));
console.log(getNaNV2(arr));
console.log(getIntegers(arr));
