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

    // const num1 = Number(prompt('Введите первое число: '));
    // const num2 = Number(prompt('Введите второе число: '));
    // const action = prompt('Введите желаемое действие: + - / * ');
    // let output;

    // switch(action) {
    //     case '+':
    //         output = num1 + num2;
    //         alert(`результат:  ${output}`);
    //     break;

    //     case '-':
    //         output = num1 - num2;
    //         alert(`результат: ${output}`);
    //     break;

    //     case '*':
    //         output = num1 * num2;
    //         alert(`результат:  ${output}`);
    //     break;

    //     case '/':
    //         output = num1 / num2;
    //         alert(`результат: ${output}`);
    //     break;

    //     default:
    //         alert(`невозможно произвести действие, введите другое действие`)
    //  }
    

    // task 3

    const visitorAge = Number(prompt('How old are you?'));
    const teenagerMIN_AGE = 12;
    const teenagerMAX_AGE = 18;
    const retireeMIN_AGE = 60;
    const retireeMAX_AGE = 80;
    

    if (((visitorAge > teenagerMIN_AGE) 
            &&  (visitorAge < teenagerMAX_AGE))
            ||  ((visitorAge > retireeMIN_AGE) 
            &&  (visitorAge < retireeMAX_AGE))) {

         const isAdultPermission = confirm("You have permission from an adult? ");

           if (isAdultPermission) {
                alert("Welcome!");
           } else {
            alert("No entry");
           }

        } else if((visitorAge > teenagerMAX_AGE) && (visitorAge < retireeMIN_AGE)) {
            alert("Welcome!");
            
        } else {
            alert("No entry");
        }
    
    // if((visitorAge >= teenagerMAX_AGE) && (visitorAge <= retireeMIN_AGE)) {
    //      alert("Welcome!");
    //     } else if ((visitorAge < teenagerMIN_AGE) || (visitorAge > retireeMAX_AGE)) {
    //         alert("No entry");
    //         } else {
    //             const isAdultPermission = confirm(`You have permission from an adult? `);
    //             if (isAdultPermission) {
    //                 alert("Welcome!");
    //             } else {
    //                 alert("No entry");
    //             }
    //         }
