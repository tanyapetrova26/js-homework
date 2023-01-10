
  // task 2

const BASE_URL_CHAR = "https://swapi.dev/api/people";

const form = document.getElementById("findcharForm");
const charIdInput = document.getElementById("charId");
const charContainer = document.getElementById("charContainer");
const preloader = document.getElementById("preloader");

const showPreloader = (show) => {

  if(show){
    preloader.style.display = "block";
  }else {
    preloader.style.display = "none";
  }

}

const handleErrors = async (response) => {
  if (!response.ok) {
    let { error } = await response.json();
      
    throw new Error(response.status);
  }
  return response;
}


const renderFilmsList = (arrFilms) => {
  const nameFilms = arrFilms.map(film => film.title);

  const filmsCont = document.createElement("div");

    for (let name of nameFilms) {
      const filmName = document.createElement("p");
      filmName.innerText = name;
      filmName.classList.add("film_text");

      filmsCont.append(filmName);
    }

    charContainer.firstElementChild.append(filmsCont);
}


const renderButtonFilm = async ({films}) => {
 

  const fetchFilms = films.map((film) => fetch(film));

  try {
    const responses = await Promise.all(fetchFilms);
    const jsonResponses = responses.map((response) => response.json());
    const res = await Promise.all(jsonResponses);

    showPreloader(false);
     renderFilmsList(res);

  }catch {
    alert("error");
  }
  
}

const renderCharacterCard = (char) => {
 const { name } = char;

 let cardChar = document.createElement("div");
    cardChar.classList.add("card_character");

  let nameChar = document.createElement("p");
  nameChar.innerText = name;
  nameChar.classList.add("name_char");

  let btnChar = document.createElement("button");
  btnChar.innerText = "FILMS";
  btnChar.classList.add("button_char");

  cardChar.append(nameChar, btnChar);
  charContainer.append(cardChar);
  

  btnChar.addEventListener("click", (event) => {
    
    if (!event.target.hasAttribute("isActive")) {
      
      event.target.setAttribute("isActive", "");
      
      showPreloader(true);
      renderButtonFilm(char);
      
    }else {
      event.target.removeAttribute("isActive");
      event.target.nextElementSibling.remove();
    }
  });

}

const getCharacter = async (id) => {
  
  try {
    const response = await handleErrors(await fetch(`${BASE_URL_CHAR}/${id}`))
   
    const character = await response.json();

     showPreloader(false);
     renderCharacterCard(character);

  }catch (error) {
    if (+error.message === 404) {
      alert("Нет персонажа с таким id");
    };
      alert("error");
    }
}

const handleIdForm = (event) => {
  event.preventDefault();

  const charId = charIdInput.value;

  if (charId === "") {
    alert("Введите число");
  }else {
    
    showPreloader(true);
    getCharacter(charId);
    
    
  }
    charContainer.firstElementChild.remove();
}

form.addEventListener("submit", handleIdForm);