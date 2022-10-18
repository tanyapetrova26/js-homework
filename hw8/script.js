const getArrSum = (arr) => {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  };
  
  const sum = getArrSum([13, 258, 2324, 76, 4, 658]);
//   console.log(`sum`, sum)

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) {
      // console.log(`item`, item);
      partialSum += item;
      // console.log(`partialSum`, partialSum);
      maxSum = Math.max(maxSum, partialSum);
      if (partialSum < 0) {
        partialSum = 0;
      }
    }
  
    return maxSum;
  }
  
//   console.log(getMaxSubSum([-1, 2, 3, -9, 3])); // 5
//   console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
//   console.log( getMaxSubSum([-5, 0, 4, 5, -9]) ); // 3

// task 1

function countTrue(arr) {
    let counter = 0;

    for(let item of arr) {
        if(item) {
            counter ++;
        }
    }
    return counter;
}
console.log(countTrue([true, false, false, true, false])); // -> 2
console.log(countTrue([false, false, false, false])); // -> 0
console.log(countTrue([])); // -> 0
console.log(countTrue([false, false, false, false, true, true, true, true]));