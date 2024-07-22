// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

const body = document.querySelector('div.container');
const library = document.createElement('div');
library.setAttribute('class', 'library');
body.appendChild(library);

const myLibrary = [];

function Book(
    title,
    author = "N/A",
    pages = "N/A",
    readStatus = false) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
    let bookIndex = myLibrary.length;

    const book = document.createElement('div');
    book.setAttribute("class", "book");
    book.setAttribute("id", bookIndex);


    const bookTitle = document.createElement('div');
    bookTitle.setAttribute("class", "title");	
    bookTitle.textContent = `${title}`

    const bookAuthor = document.createElement('div');
    bookAuthor.setAttribute("class", "author");
    bookAuthor.textContent = `${author}`

    const bookPages = document.createElement('div');
    bookPages.setAttribute("class", "pages");
    bookPages.textContent = `${pages}`

    const bookReadStatus = document.createElement('div');
    bookReadStatus.setAttribute("class", "readStatus");
    bookReadStatus.textContent = `${readStatus === true ? "Read" : "Unread"}`

    book.appendChild(bookTitle);
    book.appendChild(bookAuthor);
    book.appendChild(bookPages);
    book.appendChild(bookReadStatus);

    library.append(book);
}

//// checking if i know what im doing right now LOL
//myLibrary.forEach((book) => console.log(book.title));

const form = document.querySelector("#form");
const title = document.querySelector("input.title");
const author = document.querySelector("input.author");
const pages = document.querySelector("input.pages");
const readStatus = document.querySelector("input.readStatus");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addBookToLibrary(title.value, author.value, pages.value, readStatus.checked);

    title.value = "";
    author.value = "";
    pages.value = 0;
    readStatus.checked = false;
    
});

// Just to fill it with something
addBookToLibrary("Atomic Habits", "James Clear", 320, true);
addBookToLibrary("The Inner Game of Tennis", "Timothy Gallwey", 170, true);
