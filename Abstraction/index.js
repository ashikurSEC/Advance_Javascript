function Circle ( radius ) {
    this.radius = radius;

    this.computeFunction = () =>{
        // ... 
    }

    this.impactFunction  = () =>{
        this.computeFunction();
        console.log('Hello Impact Function!');
    }
}

const circle = new Circle(10);

circle.computeFunction(0.1);

circle.impactFunction();