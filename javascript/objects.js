let Rectangle = function(width, height) {
    console.log("This in Rectangle is: ");
    console.log(this);
    this.width = width || 0;
    this.height = height || 0;
    this.getArea = function() {
        console.log("This in a Rectangle's getArea is: ");
        console.log(this);
        return this.width * this.height;
    };
}

let rect1 = new Rectangle(5, 10);
console.log("Area of rectangle 1: " + rect1.getArea());

const Book = function(title, author, published, hasMovie) {
    this.title = title;
    this.author = author;
    this.published = published;
    this.hasMovie = hasMovie;
    this.display = function() {
        console.log(this);
    };
}

let book1 = new Book("Last Don", "Mario Puzzo", 1990, true);
book1.display();

const book2 = {
    title: "The Adventures of Sherlock Holmes",
    author: "Sir Arthur Conan Doyle",
    published: 1892,
    movie: true,
    display: function() {
        console.log(this);
    }
};
book2.display();

const book3 = new Object(); 
book3.title = "A Study in Scarlet";
book3.author = "Sir Arthur Conan Doyle";
book3.published = 1887;
book3.movie = false;
book3.display = function() {
    console.log(this);
};
book3.display();

const Movie = function(title, producer, hasBook) {
    this.title = title;
    this.producer = producer;
    this.hasBook = hasBook;
    this.display = function() {
        console.log(this);
    };
}

let movie1 = new Book("Harry Potter", "JK Rowling", true);
let movie2 = movie1;

if (movie1 === movie2) {
    console.log("movie1 is equal to movie2");
}
else {
    console.log("movie1 is not equal to movie2");
}




