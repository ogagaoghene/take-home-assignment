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
console.log(book1.display());

const book2 = {
    title: "The Adventures of Sherlock Holmes",
    author: "Sir Arthur Conan Doyle",
    published: 1892,
    movie: true,
    display: function() {
        console.log(this);
    }
};
console.log(book2.display());

const book3 = new Object(); 
book3.title = "A Study in Scarlet";
book3.author = "Sir Arthur Conan Doyle";
book3.published = 1887;
book3.movie = false;
book3.display = function() {
    console.log(this);
};
book3.display();





