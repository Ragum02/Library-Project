const myLibrary = [];

const inputDialog = document.querySelector("#input_dialog");
const inputContainer = document.querySelector("#input_container");
const titleInput = document.querySelector(".title");
const authorInput = document.querySelector(".author");
const pagesInput = document.querySelector(".pages");
const readInput = document.querySelector(".read");

const newButton = document.querySelector(".open_container");
const closeButton = document.querySelector(".close");
const addButton = document.querySelector(".add")
const changeState = document.querySelector(".change");

const booksContainer = document.querySelector("#books_container");

class Book{
    constructor(title,author,pages,read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}


/** handle user input menu */

closeButton.addEventListener("click", () => {
    inputDialog.close();
})

newButton.addEventListener("click", () => {
    inputDialog.showModal();
})
/**********************************************/


addButton.addEventListener("click", () => {
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = readInput.value;


        if(title && author && pages) {
            const newBook = new Book(title,author,pages,read);
            myLibrary.push(newBook);

            const bookItem = document.createElement("div");
            bookItem.classList.add("book");
    
            let itemTitle = document.createElement("span");
            itemTitle.textContent = `Title: ${newBook.title}`;
            bookItem.appendChild(itemTitle);
    
            let itemAuthor = document.createElement("span");
            itemAuthor.textContent = `Author: ${newBook.author}`;
            bookItem.appendChild(itemAuthor);
    
            let itemPages = document.createElement("span");
            itemPages.textContent = `Pages: ${newBook.pages}`;
            bookItem.appendChild(itemPages);
    
            let itemRead = document.createElement("span");
            itemRead.textContent = `Status: ${newBook.read}`;
            bookItem.appendChild(itemRead);
    
            const buttonDiv = document.createElement("div");

            const changeStateButton = document.createElement("button");
            changeStateButton.classList.add("change");
            changeStateButton.textContent = "Change Status";
            changeStateButton.addEventListener("click", () => {
                newBook.read = newBook.read === "Read" ? "Not Read Yet" : "Read";
                itemRead.textContent = `Status: ${newBook.read}`;
            });

            buttonDiv.appendChild(changeStateButton);
    
            const deleteButton = document.createElement("button");
            const deleteImage = document.createElement("img");
            deleteImage.src = "assets/icons/trash.svg"
            deleteButton.classList.add("remove")
            deleteButton.appendChild(deleteImage);
            deleteButton.addEventListener("click", () => {
                booksContainer.removeChild(bookItem);
            });


            buttonDiv.appendChild(deleteButton);
            
            bookItem.appendChild(buttonDiv);
    

            booksContainer.appendChild(bookItem);

            titleInput.value = "";
            authorInput.value = "";
            pagesInput.value = "";
            readInput.checked = false;
            inputDialog.close();
        };
})



