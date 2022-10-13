// const getRgbFromHex = (hexCode) => {
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

// const getRandom = (min, max) => {
//        return Math.floor(min + Math.random()*(max - min + 1));
// }

// let res = getRandom(2, 12);
// console.log('res', res);



// регистрация пользователя

function userRegistration() {

       let newUserName;
       let newUserLastName; 
       let newUserPassword;
       let newUser = false;

       do {
              newUserName = prompt('Имя:');
                     if(!newUserName){
                            alert('Введите имя');
                            continue;
                     } else {
                            newUserName = firstLetterToUppercase(newUserName);
                            
                     }
                    
              newUserLastname = prompt('Фамилия:');
                     if(!newUserLastName){
                            alert('Введите фамилию');
                            continue;
                     } else {
                            newUserLastName = firstLetterToUppercase(newUserLastName);
                     }
              
              
              newUserPassword = prompt('Введите пароль:');
                     if(!newUserPassword){
                            alert('Введите пароль');
                            continue;
              } else {
                     let UserPassword = checkPassword(newUserPassword);
                     if(UserPassword) continue;
                     else break;
              }
                            
                      
                     function checkPassword (password) {
                            let upperCase = 'QWERTYUIOPLKJHGFDSAZXCVBNM'; 
                            let lowerCase = 'qwertyuiopasdfghjklzxcvbnm';
                            let isUpperCase = false; 
                            let isLowerCase = false;

                            if(password.length < 6) {
                                   alert('Пароль должен содержать больше 6 символов');
                                   return true;
                            } else {
                                   for (let i = 0; i < password.length; i++) {
                                         if (!isUpperCase && upperCase.indexOf(password[i]) != -1) isUpperCase = true;
                                          else if (!isLowerCase && lowerCase.indexOf(password[i]) != -1) isLowerCase = true;
                                   }
                            }       
                            if(!isUpperCase){
                                alert("Пароль должен содержать символы верхнего регистра");
                                return true;
                            }else if(!isLowerCase){
                                alert("Пароль должен содержать символы нижнего регистра");
                                return true;
                            } else{
                                   return false;
                            } 
                    
                     }

                     function firstLetterToUppercase(str) {
                            str = str.toLowerCase();
                            return str[0].toUpperCase() + str.slice(1);
                     }
       
       } while(!newUser);

              alert(`${newUserName} ${newUserLastname} регистрация прошла успешно!`)
}

userRegistration();
