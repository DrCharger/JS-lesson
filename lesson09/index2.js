const copyObj = (obj) => ({ ...obj });

console.log(copyObj({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(copyObj({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
