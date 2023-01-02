// task 1

const BASE_URL = "https://ipapi.co/json/";
const BASE_URL_FLAG = "https://restcountries.com/v2/name";


const renderFlag = async (flag) => {

    let flagCont = document.createElement("div");

    let imgFlag = document.createElement("img");
    imgFlag.setAttribute("src", flag);

    flagCont.append(imgFlag);
    document.body.append(flagCont);
    
    }

const getCountryFlag = async ( { country_name: country }, url) => {
    try {
        const response = await fetch(`${url}/${country}`);

        if (response.status === 200) {
        const flag = await response.json();
         
         renderFlag(flag[0].flag);

        }else {
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
    // countryText.classList.add("country");

    let capitalText = document.createElement("h2");
    capitalText.innerText = capital;
    // capitalText.classList.add("capital");

    let currencyText = document.createElement("p");
    currencyText.innerText = currency;
    // currencyText.classList.add("currency");

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

  getUserIpAdress(BASE_URL);