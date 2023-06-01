var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
// Creating instances of Rectangle and Circle and calculating their areas
var rectangle = new Rectangle(5, 3);
console.log("Rectangle Area:", rectangle.calculateArea());
var circle = new Circle(4);
console.log("Circle Area:", circle.calculateArea());
