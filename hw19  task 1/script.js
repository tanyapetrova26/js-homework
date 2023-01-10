// task 1

const BASE_URL = "https://ipapi.co/json/";
const BASE_URL_FLAG = "https://restcountries.com/v2/name";
const preloader = document.getElementById("preloader");

const showPreloader = (show) => {

  if(show){
    preloader.style.display = "block";
  }else {
    preloader.style.display = "none";
  }

}

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

const showIp = async({ ip }) => {
  let cardIp = document.createElement("div");
  cardIp.classList.add("card_ip");

  let ipText = document.createElement("h6");
  ipText.innerText = ip;
  ipText.classList.add("text_ip");

  cardIp.append(ipText);
    document.body.append(cardIp);
}

const getUserIpAdress = async (url) => {
  
        showPreloader(true);

    try {
      const response = await fetch(url);
      if (response.status === 200) {
      const place = await response.json();
      console.log('place', place)

      showIp(place);
  
      getCountryFlag(place, BASE_URL_FLAG);
      
      showPreloader(false);
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


 