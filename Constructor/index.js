function Circle ( radius ){
    this.radius = radius;

    this.john = function () {
        console.log('Hello John');
    }
};

const circle = new Circle(1);
console.log(circle);