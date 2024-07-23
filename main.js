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

function addBookToLibrary(title, author, pages, readStatus, add=false, index=-1) {
    const library = document.querySelector('div.library');
    let librarySize = 0;
    if (index >= 0) {
	librarySize = index;
    } else {
	librarySize = myLibrary.length;
    }

    const book = document.createElement('div');
    book.setAttribute("class", "book");
    book.setAttribute("id", `book-${librarySize}`);

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

    
    const readToggle = document.createElement('input');
    readToggle.setAttribute("type", "button");
    readToggle.setAttribute("value", "Toggle Read Status");
    readToggle.setAttribute("id", `btn-${librarySize}`);
    readToggle.setAttribute("onclick", "toggleReadStatus(this.id)");

    const bookDeleteButton = document.createElement('input');
    bookDeleteButton.setAttribute("type", "button");
    bookDeleteButton.setAttribute("id", `btn-${librarySize}`);
    bookDeleteButton.setAttribute("value", "Remove from Library");
    bookDeleteButton.setAttribute("onclick", "removeBookFromLibrary(this.id);reDraw();");

    if (add == true) {
	const newBook = new Book(title, author, pages, readStatus);
	myLibrary.push(newBook);
    }

    book.appendChild(bookTitle);
    book.appendChild(bookAuthor);
    book.appendChild(bookPages);
    book.appendChild(bookReadStatus);
    book.appendChild(readToggle);
    book.appendChild(bookDeleteButton);

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

    addBookToLibrary(title.value, author.value, pages.value, readStatus.checked, true);

    title.value = "";
    author.value = "";
    pages.value = 0;
    readStatus.checked = false;
});

function removeBookFromLibrary(id) {
    // to remove from DOM
    const toRemove = document.querySelector(`div.library div#book-${id.slice(-1)}`);
    toRemove.remove();

    // to remove from Array
    const pos = id.slice(-1);
    console.log(pos);
    if (pos == 0) {
	myLibrary.splice(0, 1);
    } else {
	myLibrary.splice(pos, pos);
    }
}

function reDraw() {
    const oldLibrary = document.querySelector('div.library');
    oldLibrary.remove();

    const library = document.createElement('div');
    library.setAttribute('class', 'library');
    body.appendChild(library);

    for (let i = 0; i < myLibrary.length; ++i) {
	let b = myLibrary[i];

	console.log(b.title, b.author, b.pages, b.readStatus);

	addBookToLibrary(b.title, b.author, b.pages, b.readStatus, false, i);
    }
}

function toggleReadStatus(id) {
    const book = document.querySelector(`div.library div#book-${id.slice(-1)}`);
    const readStatus = book.querySelector('div.readStatus');

    if (readStatus.textContent == 'Read') {
	readStatus.textContent = 'Unread';
    } else if (readStatus.textContent == 'Unread') {
	readStatus.textContent = 'Read';
    } 
}

// Just to fill it with something
addBookToLibrary("Atomic Habits", "James Clear", 320, true, true);
addBookToLibrary("The Inner Game of Tennis", "Timothy Gallwey", 170, true, true);
addBookToLibrary("The Hobbit", "J.R.R Tolkien", 400, false, true);
