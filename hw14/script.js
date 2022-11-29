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

  handleInput.setAttribute("type", config.element);
  handleInput.setAttribute("name", config.name);
  handleInput.setAttribute("id", config.name);
    

  handleForm.append(handleLabel, handleInput);

  handleGetForm.append(handleForm);
}


const getSelectForm = (selectObj) => {
  let handleSelect = document.createElement("div");
    
  let handleLabel = document.createElement("label");
      handleLabel.innerText = selectObj.label;
  
  let handleSelectItem = document.createElement("select");
   
      handleSelectItem.setAttribute("type", selectObj.element);
      handleSelectItem.setAttribute("name", selectObj.name);
      handleSelectItem.setAttribute("id", selectObj.name);
     
    
      selectObj.options.forEach((opt) => {
        const option = document.createElement("option");
        option.innerText = opt.text;
        option.setAttribute("value", opt.value);

        handleSelectItem.append(option);
      });

      // for(let opt of selectObj.options) {
      //   let newOption = new Option(`${opt.text}`, `${opt.value}`);
    
      //   handleSelectItem.append(newOption);
      // }
  
    handleSelect.append(handleLabel, handleSelectItem);
    
    handleGetForm.append(handleSelect);
  }


const renderForm = (formConfig) => {

  formConfig.forEach(formElement => {

    
    if (formElement.element === "text") {
          getForm(formElement);
          
        } else if (formElement.element === "select") {
          getSelectForm(formElement);
        }
  });
  // const renderForm = (formConfig) => {
    // for (let obj in formConfig) {
    //   let item = formConfig[obj];

    //   if (item.element === "text") {
    //     getForm(item);
        
    //   } else if (item.element === "select") {
    //     getSelectForm(item);
    //   }
    // };

    let btn = document.createElement("button");

      btn.setAttribute("type", "submit");
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
