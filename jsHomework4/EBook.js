const Book = require("./Book");

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    const allowedFormats = ["PDF", "EPUB", "MOBI"];
    if (!allowedFormats.includes(value)) {
      throw new Error(`File format must be one of: ${allowedFormats.join(", ")}`);
    }
    this._fileFormat = value;
  }

  printInfo() {
    super.printInfo();
    console.log(`File Format: ${this.fileFormat}`);
  }

  static convertToEBook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

module.exports = EBook;
