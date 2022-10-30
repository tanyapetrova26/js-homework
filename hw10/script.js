const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
  { id: 1, author: "Фицджеральд", name: "Великий Гетсби", isReading: false },
  { id: 2, author: "Толстой", name: "Анна Каренина", isReading: false },
  { id: 3, author: "Оруел", name: "1984", isReading: false },
  { id: 4, author: "Сервантес", name: "Дон Кихот", isReading: false },
  { id: 5, author: "A", name: "F", isReading: true },
  { id: 6, author: "Оруел", name: "Скотный двор", isReading: false },
];

function library() {

    let operation = prompt("Введите операцию (take, return, add):");

    if(operation === null) {
        alert("Bye!");

        return;
    }

    operation = operation.toLowerCase().trim();

    switch (operation){
        case "take":
            takeBook();
            break;

        case "return":
            returnBook();
            break;

        case "add":
            addBook();
            break;
        default:
            alert("Вы не выбрали действие");
            
    }
}

const takeBook = () => {

    let searchBook = prompt("Вы хотите найти книгу по автору или по названию? (author, name):");

    if(searchBook === null) {
        alert("Bye!");

        return;
    }
  

    if(!searchBook) {
        alert("Вы не выбрали критерии поиска");

        return;
    }

    searchBook = searchBook.toLowerCase().trim();

    switch (searchBook){
        case "author":
            searchingAuthorBook();
            break;
        case "name":
            searchingNameBook();
            break;
        default:
            alert("Вы неправильно выбрали критерии поиска");
            
    }
    
};

const searchingAuthorBook = () => {

    const authorList = books
    .filter(book => !book.isReading)
    .map(book => ` - ${book.author}`)
    .join("\n");
    
     

    let desiredAuthorBook = prompt(`Введите автора книги: \n${authorList} `);

    if(!desiredAuthorBook){
        alert("Вы не ввели автора книги");

        return;
    }
    
    desiredAuthorBook = desiredAuthorBook.toLowerCase().trim();

     const AuthorNameList = books
    .filter(book => !book.isReading && book.author.toLowerCase() === desiredAuthorBook)
    .map(book => ` - ${book.name}`)
    .join("\n");

    
    if(!AuthorNameList) {
        alert("Извините, у нас нет желаемого автора");

        return;
    }

    let desiredAuthorNameBook = prompt(`Введите название книги: \n${AuthorNameList} `);

    if(!desiredAuthorNameBook){
        alert("Вы не ввели название книги");

        return;
    }
    
    desiredAuthorNameBook = desiredAuthorNameBook.toLowerCase().trim();

    let desiredBook = books.find(book => book.name.toLowerCase() === desiredAuthorNameBook);

    if(!desiredBook) {
        alert("Извините, у нас нет желаемой книги");

        return;
    }

    if(desiredBook.isReading) {
        alert("Извините, эту книгу сейчас читают");

        return;
    }
    
    desiredBook.isReading = true;
    alert(`Возьмите книгу, ее id - ${desiredBook.id}`);
}


const searchingNameBook = () => {
        
    const nameList = books
    .filter(book => !book.isReading)
    .map(book => ` - ${book.name}`)
    .join("\n");

           
    let desiredNameBook = prompt(`Введите название книги: \n${nameList} `);

    if(!desiredNameBook){
        alert("Вы не ввели название книги");

        return;
    }
    
    desiredNameBook = desiredNameBook.toLowerCase().trim();

    let desiredBook = books.find(book => book.name.toLowerCase() === desiredNameBook);

    if(!desiredBook) {
        alert("Извините, у нас нет желаемой книги");

        return;
    }

    if(desiredBook.isReading) {
        alert("Извините, эту книгу сейчас читают");

        return;
    }

    
    desiredBook.isReading = true;
    alert(`Возьмите книгу, ее id - ${desiredBook.id}`);

    
    

}

const returnBook = () => {
    
    let returnIdBook = prompt("Введите id книги, которую хотите вернуть: ");

    if(!returnIdBook) {
        alert("Вы не ввели id");

        return;
    }

    let returnBook = books.find(book => book.id === Number(returnIdBook)); 

    if(!returnBook) {
        alert(`Книги с id = ${returnIdBook} не существует`);
        
        return;
    }

    if(!returnBook.isReading) {
        alert("Книга сейчас не читается, вы не можете ее вернуть");

        return;
    }
    returnBook.isReading = false; 
    alert("Спасибо! Читайте еще наши книги");
}

const addBook = () => {
    
    const name = prompt("Введите название книги");
    const author = prompt("Введите автора книги");

    const newBook = {
        id: generationId(),
        author,
        name,
        isReading: false,
        
    }

    let checkNameBook = books.find(book => book.name.toLowerCase() === newBook.name.toLowerCase());

    if(checkNameBook) {
        alert("Такая книга уже есть в библиотеке");

        return;
    }

    books.push(newBook);

    alert(`Книга успещно добавлена, ее id - ${newBook.id}`);
}


const generationId = () => {
    let generatedId;
    let isBookWithId = true;

    do{
        generatedId = Math.ceil(Math.random()*10); 
        
        isBookWithId = Boolean(books.find(book => book.id === generatedId));
        
    } while(isBookWithId);

    return generatedId;
    
}