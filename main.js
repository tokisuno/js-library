// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

const body = document.querySelector('body');
const library = document.createElement('div');
const add = document.querySelector('button.add');

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
	bookReadStatus.textContent = `${readStatus === true ? "Read!" : "Unread"}`

	book.appendChild(bookTitle);
	book.appendChild(bookAuthor);
	book.appendChild(bookPages);
	book.appendChild(bookReadStatus);

	library.append(book);
}

add.addEventListener("click", () => {
	prompt('asdf');
});

// filling the array with two books so it at least has something
addBookToLibrary("Atomic Habits", "James Clear", 320, true);
addBookToLibrary("The Inner Game of Tennis", "Timothy Gallwey", 170, true);

// checking if i know what im doing right now LOL
myLibrary.forEach((book) => console.log(book.title));
