const getParsedIntegers = (arr) => arr.map((num) => Number.parseInt(num));
const getParsedIntegersV2 = (arr) => arr.map((num) => parseInt(num));
const getParsedFloats = (arr) => arr.map((num) => Number.parseFloat(num));
const getParsedFloatsV2 = (arr) => arr.map((num) => parseFloat(num));
const arr = [1, 5, 6, 7, 8, '9', 76, 5, 4, 3, 2];

console.log(getParsedFloats(arr));
console.log(getParsedFloatsV2(arr));
console.log(getParsedIntegers(arr));
console.log(getParsedIntegersV2(arr));
