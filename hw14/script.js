const formConfig = [
  {
    element: "text",
    name: "login",
    label: "Логин",
  },
  {
    element: "text",
    name: "age",
    label: "Возраст",
  },
  {
    element: "select",
    name: "language",
    label: "Выберите язык программирования",
    options: [
      {
        text: "JavaScript",
        value: "js",
      },
      {
        text: "Java",
        value: "java",
      },
      {
        text: "Python",
        value: "python",
      },
    ],
  },
];



let container = document.querySelector(".container");
let handleGetForm = document.createElement("form");


const getForm = (config) => {
  let handleForm = document.createElement("div");
  let handleLabel = document.createElement("label");

        handleLabel.innerText = config.label;
  let handleInput= document.createElement("input");

    handleInput.type = config.element;
    handleInput.name = config.name;
    handleInput.id = config.name;


  handleForm.append(handleLabel, handleInput);

  handleGetForm.append(handleForm);
}


const getSelectForm = (selectObj) => {
  let handleSelect = document.createElement("div");
    
  let handleLabel = document.createElement("label");
      handleLabel.innerText = selectObj.label;
  
  let handleSelectItem = document.createElement("select");
   
      handleSelectItem.type = selectObj.element;
      handleSelectItem.name = selectObj.name;
      handleSelectItem.id= selectObj.name;
    
      for(let opt of selectObj.options) {
        let newOption = new Option(`${opt.text}`, `${opt.value}`);
    
        handleSelectItem.append(newOption);
      }
  
    handleSelect.append(handleLabel, handleSelectItem);
    
    handleGetForm.append(handleSelect);
  }


const renderForm = (formConfig) => {
    for (let obj in formConfig) {
      let item = formConfig[obj];

      if (item.element === "text") {
        getForm(item);
        
      } else {
        getSelectForm(item);
      }
    };

    let btn = document.createElement("button");

      btn.type = "submit";
      btn.innerText = "ПОДТВЕРДИТЬ"

      handleGetForm.append(btn);
  container.append(handleGetForm);
};


const convertFormDataToObject = (formData) => {
  const formValues = {};

  for (let pair of formData.entries()) {
    formValues[pair[0]] = pair[1];
  }

  return formValues;
};


const handleFormSubmit = (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    
    const preparedData = convertFormDataToObject(formData);

    console.log(`preparedData`, preparedData);
      
 };
  

 renderForm(formConfig);
 handleGetForm.addEventListener("submit", handleFormSubmit);
