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
        console.log(book.id);
        let check = document.querySelector(`div.book#book-${book.id}`);
        check.remove();

        //console.log(this.shelf[book].title, this.shelf[book].id)
        if (book.id === 0) {
            this.shelf.splice(0, 1);
        } else {
            this.shelf.splice(book.id, book.id);
        }
        this.shelf.forEach((book, i) => {
            book.id = i;
        });

        this.drawShelf();
    }
    clearShelf() {
        let shelf = document.querySelectorAll("div.book");
        shelf.forEach((book) => {
            book.remove();
        });
    }
    toggleReadStatus(book) {
        return book.readStatus = (book.readStatus === 'Read' ? 'Unread' : 'Read');
    }
    drawShelf() {
        this.clearShelf();
        const library = document.querySelector('div.library');
        this.shelf.forEach((item) => {
            let check = document.querySelectorAll(`div.book#book-${item.id}`);
            if (check.length > 0) {
                return;
            }
            item.drawBook(library);
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

        const removeBookButton = document.createElement('input');
        removeBookButton.setAttribute('type', 'button');
        removeBookButton.setAttribute('id', `btn-${this.id}`);
        removeBookButton.setAttribute('value', 'Remove from Library');
        removeBookButton.addEventListener("click", () => {
            bookshelf.removeFromShelf(this);
        });

        console.log(this.title);

        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(readStatus);
        book.appendChild(toggleReadStatus);
        book.appendChild(removeBookButton);

        library.append(book);
    }
}

const bookshelf = new Library();

// Just so then the library is populated.
const atomicHabits = new Book("Atomic Habits", "James Clear", 320, true);
const innerGame = new Book("The Inner Game of Tennis", "Timothy Gallwey", 170, true);
const hobbit = new Book("The Hobbit", "J.R.R Tolkien", 400, false);

bookshelf.addToShelf(atomicHabits)
bookshelf.addToShelf(innerGame)
bookshelf.addToShelf(hobbit)

console.log(bookshelf.shelf);

const form = document.querySelector("#form");
const title = document.querySelector("input.title");
const author = document.querySelector("input.author");
const pages = document.querySelector("input.pages");
const readStatus = document.querySelector("input.readStatus");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newBook = new Book(title.value, author.value, Number(pages.value), readStatus.value);
    bookshelf.addToShelf(newBook);
});

//bookshelf.drawShelf();
