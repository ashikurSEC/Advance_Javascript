function createCircle ( radius ) {
    return {
        radius,

        john () {
            console.log('Hello John!');
        }
    }
};

const circle = createCircle(1);

circle.john();

console.log( circle );