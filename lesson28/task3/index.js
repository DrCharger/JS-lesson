const mult = (initValue) => (value) => initValue * value;

const twice = mult(2);

const triple = mult(3);

const result = twice(7);
const result2 = triple(9);

console.log(result);
console.log(result2);
