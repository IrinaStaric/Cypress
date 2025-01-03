const Book = require("./jsHomework4/Book");
const EBook = require("./jsHomework4/EBook");

const book1 = new Book("Sapiens", "Yuval Noah Harari", 2011);
const book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

book1.printInfo();
book2.printInfo();

const ebook1 = new EBook("Atomic Habits", "James Clear", 2018, "PDF");

ebook1.printInfo();

const books = [book1, book2, ebook1];
const oldestBook = Book.oldestBook(books);
console.log("Oldest Book:");
oldestBook.printInfo();

const newEBook = EBook.convertToEBook(book1, "EPUB");
console.log("Converted EBook:");
newEBook.printInfo();
