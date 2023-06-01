class Book {
    constructor(public title: string) { }
}
class Library {
    books: Book[] = [];
    addBook(book: Book): void {
        this.books.push(book);
    }
    removeBook(book: Book): void {
        const index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    }
    searchBookByTitle(title: string): Book | undefined {
        return this.books.find((book) => book.title === title);
    }
}
const library = new Library();
const book1 = new Book("Life of pie");
const book2 = new Book("The Alchemist");
const book3 = new Book("A Breif history of time");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
console.log(library.books);
library.removeBook(book2);
console.log(library.searchBookByTitle("Life of pie"));
console.log(library.books)