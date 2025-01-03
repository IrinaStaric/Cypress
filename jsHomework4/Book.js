class Book {
    constructor(title, author, year) {
      this._title = title;    
      this._author = author;  
      this._year = year;      
    }
  
    get title() {
      return this._title;
    }
  
    get author() {
      return this._author;
    }
  
    get year() {
      return this._year;
    }
  
    set title(value) {
      if (typeof value !== "string" || value.trim() === "") {
        throw new Error("Title must be a non-empty string.");
      }
      this._title = value;
    }
  
    set author(value) {
      if (typeof value !== "string" || value.trim() === "") {
        throw new Error("Author must be a non-empty string.");
      }
      this._author = value;
    }
  
    set year(value) {
      if (typeof value !== "number" || value <= 0) {
        throw new Error("Year must be a positive number.");
      }
      this._year = value;
    }
  
    printInfo() {
      console.log(`Book: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }
  
    static oldestBook(books) {
      if (!Array.isArray(books)) {
        throw new Error("Input must be an array of books.");
      }
      return books.reduce((oldest, current) =>
        current.year < oldest.year ? current : oldest
      );
    }
 }
  
  module.exports = Book;
  
  