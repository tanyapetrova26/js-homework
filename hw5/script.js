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

let  desiredHeight = Number(prompt('Введите высоту пирамиды: '));

// drawPiramed(desiredHeight);