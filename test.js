let array1 = [1,2,3,4];
let array2 = [];
let num = 0;

array2[num] = Number(array1.reduce((acc, value) => `${acc}${value}`));

console.log(array1, array2);
console.log(array2[num]+5);
array1.splice(1, 2);
console.log(array1)