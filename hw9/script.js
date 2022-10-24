const letters = ["a", "b", "c"];

const result = letters.concat(["d", "e"], ["f"]);
// console.log(`letters`, letters);
// console.log(`result`, result);

const a = [1, 2, 3];
const aClone = a.concat([]);

aClone.push(4);
// console.log(`a`, a);
// console.log(`aClone`, aClone)

const text = "Hello my name is Nikita";
const symbols = text.split("");
const words = text.split(" ");

// console.log(`symbols`, symbols);
// console.log(`words`, words);

let resultText;

resultText = symbols.join("");
// console.log(`resultText`, resultText);

resultText = words.join(" ");
// console.log(`resultText`, resultText);

const maskCreditCard = (cardNumber) => {
    const MASK = "****";
    const groups = [];
  
    for (let i = 0, j = 1; i < cardNumber.length; i += 4, j++) {
      if (j === 2 || j === 3) {
        groups.push(MASK);
        continue;
      }
  
      const group = cardNumber.slice(i, i + 4);
      groups.push(group);
    }
  
    console.log(`groups`, groups);
    const result = groups.join(" ");
    return result;
  };

//   let res = maskCreditCard("4156258952145236");
//   console.log('maskCreditCard', res);




// task 1.1

const arrNumbers = [1, 2, -10, -2, 7];

const booleanFromNumbers = arrNumbers.map(number => number > 0 ? true : false);

console.log('booleanFromNumbers', booleanFromNumbers);


// task 1.2

const users = [
  {
    name: 'Sam',
    role: 'admin',
    age: 25,
  },
    {
    name: 'Peter',
    role: 'admin',
    age: 16,
  },
    {
    name: 'Pablo',
    role: 'admin',
    age: 32,
  },
    {
    name: 'Enrico',
    role: 'client',
    age: 43,
  },
    {
    name: 'Mary',
    role: 'client',
    age: 34,
  },
    {
    name: 'Katerine',
    role: 'guest',
    age: 17,
  },
]

const adultAdmins = users
.filter(item => item.age > 18 && item.role === 'admin')
.map(item => item.name);

console.log('adultAdmins', adultAdmins);
// const adultAdmins = yourFunction(users); // [Sam, Pablo]


// task 1.3

const numbers = [1, 10, 17, 24, 45];

const arithmeticMean = numbers.reduce((a,b) => (a + b)) / numbers.length;

console.log('arithmeticMean', arithmeticMean);






const data = [
    {
      name: "John",
      age: 24,
      position: "senior",
      isActive: false,
    },
    {
      name: "Peter",
      age: 33,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sam",
      age: 29,
      position: "junior",
      isActive: true,
    },
    {
      name: "Mary",
      age: 24,
      position: "middle",
      isActive: false,
    },
    {
      name: "Steve",
      age: 23,
      position: "middle",
      isActive: true,
    },
    {
      name: "Kate",
      age: 31,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sally",
      age: 19,
      position: "junior",
      isActive: false,
    },
    {
      name: "Jack",
      age: 19,
      position: "middle",
      isActive: true,
    },
  ];



    
// console.log(filterData(data, { age: 23 }));


// filterData = (data) => data.filter((item )=> item.age === 19 && item.position === "junior");

// console.log(filterData(data, { age: 19, position: "junior" }));
 

  
  
  
 
  
