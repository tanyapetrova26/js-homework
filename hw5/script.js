const drawPiramed = (height) => {

    for(i = 0; i < height; i++) {
        let stars = '';
        let spacesBefore = '';

        for(j = 0; j < 2 * i + 1; j++){
            stars += '*';
        }

        for(k = 0; k < height - i - 1; k++) {
            spacesBefore += ' ';
        }

        console.log(spacesBefore + stars);
    }
    
}

// let  desiredHeight = Number(prompt('Введите высоту пирамиды: '));

// drawPiramed(desiredHeight);


const LOGIN = "ADMIN";
const PASSWORD = "1q2w3e"

const authorise = () => {

    let userLogin;
    let userPassword;
    let isAuthSuccess = false;
    let tryCounter = 0;
        
        do {
            while(tryCounter < 3) {
                userLogin = prompt("Логин: ");
                    if(!userLogin){
                    alert(`Введите логин, у вас осталось ${2 - tryCounter} попытки`);
                    tryCounter++;
                    continue;
                }

                userPassword = prompt("Пароль: ");
                    if(!userPassword){
                    alert(`Введите пароль, у вас осталось ${2 - tryCounter} попытки`);
                    tryCounter++;
                    continue;
                }

                if(userLogin === LOGIN && userPassword === PASSWORD) {
                    isAuthSuccess = true;
                    break;
                } else {
                    alert(`Данные не верны, у вас осталось ${2 - tryCounter} попытки`);
                    tryCounter++;
                    continue;
                }

            }
            
        
            if(tryCounter === 3){
                alert("Ваши попытки закончились");
                break;
            } else {
                alert("Welcame!");
            }
           
        } while(!isAuthSuccess);

      
}

authorise();



