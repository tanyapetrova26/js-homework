// сумма зарплат работников task 2

const salaries = {
    Brown: "1200.50",
    Norman: "1800.30",
    Colyn: "1300.05",
    Tramp: "3650.54"
}

function getSalariesTotal(salaries) {
    let total = 0;
    for (employee in salaries) {
        total += Number(salaries[employee]);
    }
    return total;
}

let totalRes = getSalariesTotal(salaries);
console.log('totalRes', Math.trunc(totalRes * 100 ) / 100);

salaries.Neit = "2300.15";
salaries.Klark = "5300.80";

totalRes = getSalariesTotal(salaries);
console.log('totalRes', Number(totalRes.toFixed(2)));


// расписание

let Chedule = {};

function showСhedule() {

    let getСhedule = false;
    
do {
    let timeTask = prompt('Время:');
    let task = prompt('Задача:');

    if(!timeTask || !task) {
        return getСhedule = true;
    } else {
        
        Chedule[timeTask] = task;
        
    }
} while(!getСhedule);

}

// showСhedule();
// console.log(Chedule);


