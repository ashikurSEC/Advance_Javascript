function Circile ( radius ) {
    this.radius = radius;
    this.john   = function () {
        console.log('Hello John');
    }
}

const circle = new Circile(10);

for (let key in circle) {
    if (typeof circle[key] !== 'function') {
        console.log(key, circle[key]);
    }
}

const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle) {
    console.log('Radius in circle!');
}