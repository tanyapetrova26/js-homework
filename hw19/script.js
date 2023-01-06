// task 1

const BASE_URL = "https://ipapi.co/json/";
const BASE_URL_FLAG = "https://restcountries.com/v2/name";


const renderFlag = async (flag) => {

    let flagCont = document.createElement("div");

    let imgFlag = document.createElement("img");
    imgFlag.setAttribute("src", flag);
    imgFlag.classList.add("imgFlag");

    flagCont.append(imgFlag);
    document.body.append(flagCont);
    
}

const getCountryFlag = async ( { country_name: country }, url) => {
  try {
    const response = await fetch(`${url}/${country}`);

        if (response.status === 200) {
        const flag = await response.json();
         
         renderFlag(flag[0].flag);

        } else {
          throw new Error (`Error: ${response.status}`);
        }
  
    } catch (error) {
        let errText = error.message;
              alert(errText);
    }


}


const showCountry = async ( {country_name: country, country_capital: capital, currency} ) => {

   
    let card = document.createElement("div");
    card.classList.add("card");

    let countryText = document.createElement("h1");
    countryText.innerText = country;
    countryText.classList.add("country");

    let capitalText = document.createElement("h2");
    capitalText.innerText = capital;
    capitalText.classList.add("capital");

    let currencyText = document.createElement("p");
    currencyText.innerText = currency;
    currencyText.classList.add("currency");

    card.append(countryText, capitalText, currencyText);
    document.body.append(card);
   

}

const getUserIpAdress = async (url) => {

    try {
      const response = await fetch(url);
      if (response.status === 200) {
      const place = await response.json();
  
      getCountryFlag(place, BASE_URL_FLAG);
      
      showCountry(place);

      }else {
        throw new Error (`Error: ${response.status}`);
      }

    } catch (error) {
      let errText = error.message;
            alert(errText);
      }
    
  };

  // getUserIpAdress(BASE_URL);


  // task 2

const BASE_URL_CHAR = "https://swapi.dev/api/people";

const form = document.getElementById("findcharForm");
const charIdInput = document.getElementById("charId");
const charContainer = document.getElementById("charContainer");


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

    await renderCharacterCard(character)

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
    
    getCharacter(charId);
    
  }
    charContainer.firstElementChild.remove();
}

form.addEventListener("submit", handleIdForm);