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


// task 2

function showGreeting() {
    const userName = prompt ('What is your name?');
    const userAge= Number(prompt ('How old are you?'));

        if (userAge >= 30) {
            alert(`Hello, ${userName}`);
        } else if (userAge > 0){
            alert(`Hi, ${userName}`);
        } else {
            alert("Data entry error");
        }
}

showGreeting();