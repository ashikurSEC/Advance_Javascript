class Student {
    constructor ( name ) {
        this.name = name;
    }

    speak () {
        return `${this.name} make a sounds`;
    }
}

class Collage extends Student {
    constructor ( name, department ) {
        super( name );
        this.department = department;
    }

    speak() {
        return `My name is ${this.name} & department of ${this.department}.`;
    }
}


class Diploma extends Collage {
    constructor ( name, department, cgpa ) {
        super(name, department);
        this.cgpa = cgpa;
    }

    speak() {
        return `My name is ${this.name} & department ${this.department} CGPA ${this.cgpa}`;
    }
}


const animals = new Diploma ('Ashikur Rahman', 'Computer', '3.59');

const results = animals.speak();

console.log(results);