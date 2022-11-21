// task 1

const response = {
    data: [
      {
        username: "samuel",
        is_active: true,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
      {
        username: "john",
        is_active: false,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
      {
        username: "peter",
        is_active: false,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
    ],
    meta: {
      paging: {
        current: 1,
        next: 2,
        prev: null,
        total: 14,
        per_page: 3,
      },
    },
  };

  const {meta: {
            paging: {
                total: totalPaging
            }
        }
    } = response;

console.log('totalPaging', totalPaging);

const { data: [primaryObj] } = response;
 const { is_active: isActive } = primaryObj;

 console.log('primaryObj', primaryObj);
 console.log('isActive', isActive);

// task 2

const user = {
    name: "gabriel",
    surname: "brown",
    age: 17,
    height: 178,
  };

  const {
    name: userName,
    surname: userSurname,
    ...parameters
    } = user;

    console.log('userName', userName);
    console.log('userSurname', userSurname);
    console.log('parameters', parameters);


    // task 3

    // const max = (a, b) => {
    //     return a > b ? a : b;
    //   };

      const max = (...numbers) => {
        return numbers.reduce((a,b) => (a > b ? a : b), 0);
      };  

    const res = max(5, 8, 10, 15, 0, 2, 25);
    console.log('res', res);

    
    
    // task 4


    const createMessage = ({ author = "Guest", text, reciever, time = new Date() }) => {
        return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
      };


    //   const message = createMessage({
    //     author: "Peter", 
    //     text: "Hello", 
    //     reciever: "Sam", 
    //     time: new Date(),
    //   });
      
      // после выполнения этого задания, функция должна коректно работать с таким аргументом
      
      const message = createMessage({
        reciever: "John",
        text: "Hi!",
      });

    console.log('message', message);

    // task 5.1

    let str = "x1y 722a 333 a123v1n a55555a qwe1 1zxc";
      
      
      const regexpStartLetter = /\b[a-z]\w+\b/g;

          let result = str.match(regexpStartLetter);

          console.log('result', result);

       const regexpEndLetter = /\b\w+[a-z]\b/g;

          result = str.match(regexpEndLetter);

          console.log('result', result);

      const regexpMiddleNumbers = /\b\w\d+\w\b/g;

          result = str.match(regexpMiddleNumbers);

          console.log('result', result);

 // task 5.2

 const validationDomain = (domain) => {

      const validationDomein_regex = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/gi;
      isValidDomain = false;

      if(validationDomein_regex.test(domain)) {
        
          console.log(`Ваш домен ${domain} валидный`);
          return isValidDomain = true;
        } else {
          
          console.log(`Ваш домен ${domain} невалидный`);
          return isValidDomain = false;
        }
 };

  let resultValidation = validationDomain("ex.ua");
  console.log('resultValidation', resultValidation);

  // task 5.3

  const checkString = (str)  => { 

      const regexString = /^\d{12,}$/gi;
      isValidStr = false;

      if(regexString.test(str)) {
            return isValidStr = true;
        } else {
            return isValidStr = false;
        }
  };

  let resultValidStr = checkString("1236541111117896hjhj");
  console.log('resultValidStr', resultValidStr);



