// task 1

// const num1 = Number(prompt('Введите первое число: '));
// const num2 = Number(prompt('Введите второе число: '));

// if(num1 < num2) {
//     alert(`Число ${num1} меньше числа ${num2}`);
// } else if(num1 === num2) {
//     alert(`Числа равны`);
//     } else {
//         alert(`Число ${num1} больше числа ${num2}`); 
//     }

    // task 2

    const num1 = Number(prompt('Введите первое число: '));
    const num2 = Number(prompt('Введите второе число: '));
    const action = prompt('Введите желаемое действие: + - / * ');
    let output;

    switch(action) {
        case '+':
            output = num1 + num2;
            alert(`результат:  ${output}`);
        break;

        case '-':
            output = num1 - num2;
            alert(`результат: ${output}`);
        break;

        case '*':
            output = num1 * num2;
            alert(`результат:  ${output}`);
        break;

        case '/':
            output = num1 / num2;
            alert(`результат: ${output}`);
        break;

        default:
            alert(`невозможно произвести действие, введите другое действие`)
     }
    
    