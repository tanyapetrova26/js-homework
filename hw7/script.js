// сумма зарплат работников task 2

const salaries = {
    Brown: "1200.50",
    Norman: "1800.30",
    Colyn: "1300.05",
}

function getSalariesTotal(salaries) {
    let total = 0;
    for (employee in salaries) {
        total += Number(salaries[employee]);
    }
    return total;
}

let totalRes = getSalariesTotal(salaries);
console.log('totalRes', totalRes);

salaries.Neit = "2300.15";
salaries.Klark = "5300";

totalRes = getSalariesTotal(salaries);
console.log('totalRes', totalRes);
