// PRACICE

// Добавление нескольких элементов
const fruits = ["banana", "apple", "cherry", "pear"];
// const renderList = (arr) => {
//   const list = document.createElement('ul');

//   arr.forEach((item) => {
//     const listItem = document.createElement('li');
//     listItem.innerText = item;

//     list.append(listItem);
//   })

//   console.dir(list);
//   document.body.append(list)
// }


// const renderList = (arr) => {
//   const list = document.createElement('ul');

//   arr.forEach((item) => {
//     list.innerHTML += `<li>${item}</li>`
//   })

//   // arr.forEach((item) => {
//   //   const listItem = document.createElement('li');
//   //   listItem.innerText = item;

//   //   list.append(listItem);
//   // })

//   console.dir(list);
//   document.body.append(list)
// }


// const renderList = (arr) => {
//   const list = document.createElement("ul");

//   const listHTML = arr.map((item) => `<li>${item}</li>`).join("");

//   console.log(`listHTML`, listHTML);
//   list.innerHTML = listHTML;
  // arr.forEach((item) => {
  //   const listItem = document.createElement('li');
  //   listItem.innerText = item;

  //   list.append(listItem);
  // })

//   console.dir(list);
//   document.body.append(list);
// };

// renderList(fruits);

// Добавление элементов в элементы, "сброка компонентов"
// Предстваим, что нам нужно отрендерить верстку,
// небольшую статью в блоге.
// Она состоит из несколькх элементов:
// - заголовка
// - подзаговка
// - несольких абзацев текста
// - все элементы должны быть завернуты в контейнер

// const createBlogArticle = (title, subtitle, text) => {
//   const blogContainer = document.createElement("div");
//   const titleElement = document.createElement("h2");
//   const subtitleElement = document.createElement("h3");
//   const textContainer = document.createElement("div");

//   titleElement.innerText = title;
//   subtitleElement.innerText = subtitle;

//   text.forEach((paragraph) => {
//     const paragraphElement = document.createElement("p");
//     paragraphElement.innerText = paragraph;

//     textContainer.append(paragraphElement);
//   });

//   blogContainer.append(titleElement, subtitleElement, textContainer);
//   console.log(blogContainer);

//   return blogContainer;
// };

// const createBlogArticle = (title, subtitle, text) => {
//   const blogContainer = document.createElement("div");

//   blogContainer.innerHTML = `
//     <h2>${title}</h2>
//     <h3>${subtitle}</h3>
//     <div>
//       ${text.map((textItem) => `<p>${textItem}</p>`).join("")}
//     <div>
// `;

//   return blogContainer;
// };

// const blogItemElement = createBlogArticle("Hello World!", "My first article", [
//   "a",
//   "b",
// ]);
// document.body.append(blogItemElement);


const products = [
  {
    name: "Iphone 12",
    brand: "Apple",
    price: 3200000,
    properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
  },
  {
    name: "Galaxy S20 Ultra",
    brand: "Samsung",
    price: 2900000,
    properties: ["120 hz screen", "Water resistance"],
  },
  {
    name: "MI 9",
    brand: "Xiaomi",
    price: 1300000,
    properties: ["Best price", "Pay less - get more!"],
  },
];


// const renderList = (arr) => {
//   const listCard = document.createElement("ul");
//   // const listProperties = document.createElement("ul");
  
  
//    const listProperties = arr
   
//    .map((Propertie) => `<li>${Propertie.properties}</li>`)
//    .split(",");
  
//    const listItemProperties  = listProperties.split(",");
//   console.log('listItemProperties', listItemProperties);

//  console.log('listPropeties', listProperties)

//   listCard.innerHTML = `
//     ${arr.map((item) => `<li>
//     <h2>${item.name}</h2>
//     <h3>${item.brand}</h3>
//      <ul>
//      ${listItemProperties} 
//      </ul>
//     </li>`)
//     .join("")}
    
   
// `;


// console.log('listCard', listCard.innerHTML);
// document.body.append(listCard);
// }




const renderList = ( arr) => {

  const listCard = document.createElement("ul");

  
  
    // const listProperties = arr.map(property => (`${property.properties}`).join(""));

    //   listProperties.forEach((elem) => {
    //       const listItemProperties = document.createElement("li");
         
    //       listItemProperties.innerText = (`${elem}`);
      

    //       console.log('listItemProperties', listItemProperties);
    //       listCard.append(listItemProperties);
    //     });


   
    // console.log('listItemProperties', listItemProperties);

   
  // console.log('listProperties', listProperties);

  listCard.innerHTML = `
      ${arr.map((item) => `<li>
      <h2>${item.name}</h2>
      <h3>${item.brand}</h3>
       <ul>
       ${item.properties}
       </ul>
      </li>`)
      .join("")}

    `;  




  console.log('listCard', listCard.innerHTML);
  document.body.append(listCard);
}

renderList(products);