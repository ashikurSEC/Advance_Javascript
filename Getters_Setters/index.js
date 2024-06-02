function Circle ( radius ) {
    this.radius = radius;

    let defaultLocation = {x: 1, y: 2};

    this.getDefaultLocation = ( factor ) => {
        return defaultLocation;
    };


    this.draw = () => {
        this.getDefaultLocation(0.1);


        console.log('Draw');
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },

        set: function ( value ) {
            if (!value.x || !value.y) {
                throw new Error('Invalid location.');
            }
        }
    });
}

const circle = new Circle (10);

circle.defaultLocation = 1;

circle.draw();