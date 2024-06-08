function Ciricle(radius) {
    this.radius = radius;

    this.move = function () {
        console.log('Move function');
    }
}


Ciricle.prototype.draw = function () {
    console.log('Draw function');
    this.move();
}

const c1 = new Ciricle(1);
const c2 = new Ciricle(2);

Ciricle.prototype.toString = function () {
    return `Circle with radius ${this.radius}`;
}


