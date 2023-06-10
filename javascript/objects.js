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