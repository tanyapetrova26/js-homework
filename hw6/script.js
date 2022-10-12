// getRgbFromHex = (hexCode) => {
//     let red = hexCode.slice(1, 3);
//     let green = hexCode.slice(3, 5);
//     let blue = hexCode.slice(5, 7);
    
//     let decimalRed = parseInt(red, 16);
//     let decimalGreen = parseInt(green, 16);
//     let decimalBlue = parseInt(blue, 16);

//     return `rgb (${decimalRed}, ${decimalGreen}, ${decimalBlue})`

// }
// let res = getRgbFromHex('#c09569');
// console.log('res', res);

// const getRgbFromHex = (hexCode) => {
//     let codes = '';

//     for (let i = 1; i < hexCode.length; i += 2){
//         let color = hexCode.slice(i, i + 2);
//         let parsedColor = parseInt(color, 16);
//         if(i !==hexCode.length - 2) {
//             parsedColor = `${parsedColor}, `; 
//         } 
//         codes += parsedColor;
//     }
//     return `rgb (${codes})`;
// }

// let res = getRgbFromHex('#c09569');
// console.log('res', res);


// const getHexFromRGB = (red, green, blue) => {
// return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
// }

// let result = getHexFromRGB(192, 105, 142);
// console.log('result', result);


// const maskCreditCard = (cardNumber) => {
//  const MASK = '****';
//  let result = '';

//  for (let i = 0, j = 1; i < cardNumber.length; i += 4, j++){
//     let numbers = cardNumber.slice(i, i + 4);
//     let MaskingRes;
    
//     if(j === 2 || j === 3){
//         MaskingRes = MASK;
//     } else{
//         MaskingRes = numbers;
//     }

//     if(j !== 4) {
//         result += `${MaskingRes} `;
//     } else {
//         result += MaskingRes;
//     }
// }
//     return result;
// }
// let res = maskCreditCard('5168414252637856');
// console.log('res', res);


// генератор случайных чисел в промежутке

const getRandom = (min, max) => {
       return Math.floor(min + Math.random()*(max - min + 1));
}

let res = getRandom(2, 12);
console.log('res', res);
