const myLibrary = [];

const inputContainer = document.querySelector("#input_container")
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const pages = document.querySelector(".page");
const read = document.querySelector(".read");

const newButton = document.querySelector(".open_container");
const closeButton = document.querySelector(".close");


closeButton.addEventListener("click", () => {
    inputContainer.style.visibility = "hidden";
    inputContainer.style.position = "absolute";
})

newButton.addEventListener("click", () => {
    inputContainer.style.visibility = "visible";
    inputContainer.style.position = "inherit";
})

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function info(){
        console.log(`${this.title} by ${this.authors}. ${this.pages} pages. ${this.read}`)
    }
}

function addBook(){

}

function removeBook(){

}





const theHobbit = new Book(title,author,pages,read);

theHobbit.info();

console.log(theHobbit.valueOf())