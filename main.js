// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.readStatus === true ? "finished reading" : "not read yet"}.`;
    }
}

function addBookToLibrary() {
    // tbd
    let title;
    let author;
    let pages;
    let readStatus;
    return myLibrary.push(new Book(title, author, pages, readStatus));
}

// filling the array with two books so it at least has something
const atomicHabits = new Book("Atomic Habits", "James Clear", 320, true);
const innerGame = new Book("The Inner Game of Tennis", "Timothy Gallwey", 170, true);

myLibrary.push(atomicHabits);
myLibrary.push(innerGame);

// checking if i know what im doing right now LOL
myLibrary.forEach((book) => console.log(book.title));
