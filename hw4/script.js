// task 1

function getSum(a,b) {
 return a + b;
}

let res = getSum(5,3);
console.log('res', res);

res = getSum(1,-5);
console.log('res', res);

res = getSum(1);
console.log('res', res);

// стрелочная функция

let sum = (a,b) => a + b;

let res1 = sum(4,25);
console.log('res1', res1);

res1 = sum(20,-55);
console.log('res1', res1);

res1 = sum('4',25);
console.log('res1', res1);