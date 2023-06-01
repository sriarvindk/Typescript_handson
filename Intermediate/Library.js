var Book = /** @class */ (function () {
    function Book(title) {
        this.title = title;
    }
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.removeBook = function (book) {
        var index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    };
    Library.prototype.searchBookByTitle = function (title) {
        return this.books.find(function (book) { return book.title === title; });
    };
    return Library;
}());
var library = new Library();
var book1 = new Book("Life of pie");
var book2 = new Book("The Alchemist");
var book3 = new Book("A Breif history of time");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
console.log(library.books);
library.removeBook(book2);
console.log(library.searchBookByTitle("Life of pie"));
console.log(library.books);
