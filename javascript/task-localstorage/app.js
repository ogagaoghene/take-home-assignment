const bookForm   = document.querySelector('.book-form');
const books      = document.querySelector('.books');
const bookId     = book-form['bookid'];
const bookName   = book-form['bookname'];
const bookAuthor = book-form['author'];

const booksArray = [
    {
        bookid: 1,
        nameOfBook: "The Last Don",
        authorOfBook: "Mario Puzo",
    },
];

const handleAddStudent = (bookid, bookname, author) => {

}

const createBookElements = ({bookid, bookname, author}) => {
    const bookDiv = document.createElement('div');
    const id      = document.createElement('p');
    const name    = document.createElement('p');
    const author  = document.createElement('p');

    id.innerText     = "id: " + bookid;
    name.innerText   = "Book: " + bookname;
    author.innerText = "Author: " + author;

    bookDiv.append(id, name, author);
    book-form.appendChild(bookDiv);
}

booksArray.forEach(createBookElements)