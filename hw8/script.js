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

const getMinMax = (arr) => {
    // if (arr.length === 1) {
    //   return [arr[0], arr[0]]
    // }
  
    const res = {
      min: arr[0],
      max: arr[0],
    };
  
    for (let number of arr) {
      // console.log(`number`, number);
      if (number < res.min) {
        res.min = number;
      }
  
      if (number > res.max) {
        res.max = number;
      }
    }
  
    return res;
  };
  
//   const minMax = getMinMax([2, 3, 6, 1, -10]);
//   const minMax = getMinMax([1]);
//   console.log(`minMax`, minMax)


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
// console.log(countTrue([true, false, false, true, false])); // -> 2
// console.log(countTrue([false, false, false, false])); // -> 0
// console.log(countTrue([])); // -> 0
// console.log(countTrue([false, false, false, false, true, true, true, true]));

// task 2

function getOccurrencesCount(arr) {
    const count = {};

    for (const element of arr) {
        if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    }
    return count;
}
    // console.log(getOccurrencesCount(["a", "v", "a", "b", "b"]));
// {
//   a: 2,
//   v: 1,
//   b: 2,
// }

// console.log(getOccurrencesCount([
//     "apples",
//     "oranges",
//     "pears",
//     "pears",
//     "apples",
//     "oranges",
//     "oranges",
//     "pears",
//   ]));
  // {
  //   apples: 2,
  //   oranges: 3,
  //   pears: 3,
  // }

  // task 3

  function findExcess(arr) {
    let odd = undefined; 
    let even = undefined;
  
    for (let numbers of arr) {
      let isEven = numbers % 2 == 0;
    
      if (odd !== undefined && even !== undefined)
        return isEven ? odd : even;
         
      if (isEven) {
        even = numbers;
        } else {
          odd = numbers; 
        }
       
    }
     return arr[arr.length-1];
  }
      
      
  console.log(findExcess([0, 1, 2]));
  console.log(findExcess([1, 2, 3]));
  console.log(findExcess([2, 6, 8, 10, 3]));
  console.log(findExcess([0, 0, 3, 0, 0]));
  console.log(findExcess([1, 1, 0, 1, 1]));
