
const renderGreeting = () => {
    const greeting = document.createElement("h1");
    greeting.innerText = 'Добро пожаловать';
  
    document.body.append(greeting);
};

const renderNumberVisits = (num) => {
    const numberVisits = document.createElement("h2");
    numberVisits.innerText = `Вы заходили раз: ${num}`;
  
    document.body.append(numberVisits);
};

const firstVisit = () => {
  localStorage.setItem("counter", 1);
  let counter = localStorage.getItem("counter");
  
  renderGreeting();
  counter++;
  
  localStorage.setItem("counter", counter);
  
}

  
  
const countVisits = () => {
  counter = localStorage.getItem("counter");
  
    if (counter == 1) {
      firstVisit();
      
    } else {
        renderGreeting();
        renderNumberVisits(counter);
        counter++;
        
        localStorage.setItem("counter", counter);
        counter = localStorage.getItem("counter");
        
      }
}

countVisits();



