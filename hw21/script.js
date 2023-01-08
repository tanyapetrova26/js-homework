
const form = document.getElementById("objForm");
const selectObj = document.getElementById("selectObj");
const IdInput = document.getElementById("objId");
const container = document.getElementById("container");
const btn = document.querySelector(".button");
const preloader = document.getElementById("preloader");

const showPreloader = (show) => {

  if(show){
    preloader.style.display = "block";
  }else {
    preloader.style.display = "none";
  }

}


class Card {
 constructor({ name }) {
  this.card = document.createElement("div");
  this.name = name;
  // this.render();
 }

 render() {
  const buttonClose = document.createElement("button");
  const cardName = document.createElement("h3");

  this.card.classList.add("card_cont");
  buttonClose.classList.add("close");
  
  buttonClose.innerText = "X";
  cardName.innerText = this.name;
 
  buttonClose.addEventListener("click", () => {
    this.remove();
  });

  this.card.append(cardName, buttonClose);

  }

  show() {
    const container = document.getElementById("container");
    container.append(this.card);
  }

  remove() {
    this.card.remove();
  }
}

class StarshipsCard extends Card {
  constructor({ model, manufacturer, max_atmosphering_speed, ...rest }) {
   
    super(rest);

    this.model = model;
    this.manufacturer = manufacturer;
    this.maxSpeed = max_atmosphering_speed;
    this.render();
  }

  render() {
    super.render();

    const textModel = document.createElement("p");
    const textManufacturer = document.createElement("p");
    const textMaxSpeed = document.createElement("p");

    textModel.innerText = this.model;
    textManufacturer.innerText = this.manufacturer;
    textMaxSpeed.innerText = this.maxSpeed;

    this.card.append(textModel, textManufacturer, textMaxSpeed );
  }

}

class PlanetsCard extends Card {
  constructor({ climate, terrain, population, ...rest }) {
   
    super(rest);

    this.climate = climate;
    this.terrain = terrain;
    this.population = population;
    this.render();
  }

  render() {
    super.render();

    const textClimate = document.createElement("p");
    const textTerrain = document.createElement("p");
    const textPopulation = document.createElement("p");

    textClimate.innerText = this.climate;
    textTerrain.innerText = this.terrain;
    textPopulation.innerText = this.population;

    this.card.append(textClimate, textTerrain, textPopulation );
  }
}

class VehiclesCard extends Card {
  constructor({ cost_in_credits, crew, passengers, ...rest }) {
   
    super(rest);

    this.cost = cost_in_credits;
    this.crew = crew;
    this.passengers = passengers;
    this.render();
  }

  render() {
    super.render();

    const textCost = document.createElement("p");
    const textCrew = document.createElement("p");
    const textPassengers = document.createElement("p");

    textCost.innerText = this.cost;
    textCrew.innerText = this.crew;
    textPassengers.innerText = this.passengers;

    this.card.append(textCost, textCrew, textPassengers);
  }
}

class API {
  constructor() {
    this.BASE_URL = "https://swapi.dev/api";
  }

  findErrors = async (response) => {
   
    if (!response.ok) {
      const { detail } = await response.json();
      throw new Error(detail);
    }
    
    return response;
  }

  getStarship = async (id) => {
    const starship = await this.sendRequest(`${this.BASE_URL}/starships/${id}`);
   
    return starship;
  }

  getPlanet = async (id) => {
    const planet = await this.sendRequest(`${this.BASE_URL}/planets/${id}`);
    
    return planet;
  }

 getVehicle = async (id) => {
    const vehicle = await this.sendRequest(`${this.BASE_URL}/vehicles/${id}`);
    
    return vehicle;
  }

  sendRequest = async(url) => {
    
    const response = await this.findErrors(await fetch(url));
    const result = await response.json();
    
    return result;
  }

  
}

const api = new API();

// const CARD_MAP = {
//   starships: StarshipsCard,
//   planets: PlanetsCard,
//   vehicles: VehiclesCard
// }

// const API_MAP = {
//   starships: api.getStarship,
//   planets: api.getPlanet,
//   vehicles: api.getVehicle
// }

const handleSubmit = async (event) => {
  event.preventDefault();

  const type = selectObj.value;
  const id = IdInput.value;

  

  switch(type) {
    case "starships":
      showPreloader(true);
      const itemStarship = await api.getStarship(id);
      showPreloader(false);
      const cardStarship = new StarshipsCard(itemStarship);
      cardStarship.show();

      break;
    
    case "planets":
      showPreloader(true);
      const itemPlanet = await api.getPlanet(id);
      showPreloader(false);
      const cardPlanet = new PlanetsCard(itemPlanet);
      cardPlanet.show();

      break;

    case "vehicles":
      showPreloader(true);
      const itemVehicle = await api.getVehicle(id);
      showPreloader(false);
      const cardVehicle = new VehiclesCard(itemVehicle);
      cardVehicle.show();

      break;

    default:
      alert(error.message);
  }

  // try {
  //     showPreloader(true);
  //     const item = await API_MAP[type](id);
  //     showPreloader(false);
  //     const card = new CARD_MAP[type](item);
  //     card.show();


    
  // }catch (error) {
  //   alert(error.message);
  // }
}

form.addEventListener("submit", handleSubmit);