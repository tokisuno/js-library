const body = document.querySelector('div.container');
const library = document.createElement('div');
library.setAttribute('class', 'library');
body.appendChild(library);

class Library { 
    shelf = [];
    constructor() {
        this.shelf = this.shelf;
    }
    addToShelf(book) {
	this.shelf.push(book);
	book.id = this.shelf.length - 1;
	this.drawShelf();
    }
    removeFromShelf(book) {
	let check = document.querySelector(`div.book#book-${this.shelf[book].id}`);
	check.remove();

	//console.log(this.shelf[book].title, this.shelf[book].id)
	if (this.shelf[book].id === 0) {
	    this.shelf.splice(0, 1);
	} else {
	    this.shelf.splice(this.shelf[book], this.shelf[book]);
	}
	this.shelf.forEach((book, i) => {
	    book.id = i;
	});

	this.drawShelf();
    }
    toggleReadStatus(book) {
	return book.readStatus = (book.readStatus === 'Read' ? 'Unread' : 'Read');
    }
    drawShelf() {
	const library = document.querySelector('div.library');
	this.shelf.forEach((item, i) => {
	    let check = document.querySelectorAll(`div.book#book-${item.id}`);
	    if (check.length > 0) {
		return;
	    }
	    item.drawBook(library);
	    //console.log(item.title, item.author, item.pages);
	});
    }
}

class Book {
    author = "N/A";
    pages = "N/A";
    readStatus = false;
    id = 0;
    constructor(title, author, pages, readStatus, id) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.readStatus = (readStatus === true ? "Read" : "Unread");
	this.id = id;
    }
    drawBook(library) {
	const book = document.createElement('div');
	book.setAttribute('class', 'book');
	book.setAttribute('id', `book-${this.id}`);

	const title = document.createElement('div');
	title.setAttribute('class', 'title');
	title.textContent = `${this.title}`;

	const author = document.createElement('div');
	author.setAttribute('class', 'author');
	author.textContent = `${this.author}`;

	const pages = document.createElement('div');
	pages.setAttribute('class', 'pages');
	pages.textContent = `${this.pages}`;

	const readStatus = document.createElement('div');
	readStatus.setAttribute('class', 'readStatus');
	readStatus.textContent = `${this.readStatus}`;

	const toggleReadStatus = document.createElement('input');
	toggleReadStatus.setAttribute('type', 'button');
	toggleReadStatus.setAttribute('value', 'Toggle Read Status');
	toggleReadStatus.setAttribute('id', `btn-${this.id}`);
	toggleReadStatus.addEventListener("click", () => {
	    bookshelf.toggleReadStatus(this);
	    readStatus.textContent = `${this.readStatus}`;
	});

	book.appendChild(title);
	book.appendChild(author);
	book.appendChild(pages);
	book.appendChild(readStatus);
	book.appendChild(toggleReadStatus);

	library.append(book);

    }
}

const bookshelf = new Library();

const atomicHabits = new Book("Atomic Habits", "James Clear", 320, true);
const innerGame = new Book("The Inner Game of Tennis", "Timothy Gallwey", 170, true);
const hobbit = new Book("The Hobbit", "J.R.R Tolkien", 400, false);

bookshelf.addToShelf(atomicHabits)
bookshelf.addToShelf(innerGame)
bookshelf.addToShelf(hobbit)

console.log(bookshelf.shelf);

bookshelf.removeFromShelf(atomicHabits.id);

console.log(bookshelf.shelf);

//bookshelf.drawShelf();
