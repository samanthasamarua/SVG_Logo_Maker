// Defines a class called Shape, which has a constructor initialising the shape color, text and text color

class Shape {
    constructor(shapeColor, textColor, text) {
        this.shapeColor=shapeColor;
        this.textColor=textColor;
        this.text=text;
    }
}


// Defines a circle class and extends shape and renders and SVG circle based on specifications below. 
class Circle extends Shape{
    render(){
        return `<circle r="45" cx="50" cy="50" fill="${this.shapeColor}" />`;
    }
}

// Defines a Square class and extends shape and renders and SVG circle based on specifications below.
class Square extends Shape{
    render(){
        return `<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${this.shapeColor}" />`;
    }
}

// Defines a Triangle class and extends shape and renders and SVG circle based on specifications below.
class Triangle extends Shape{
    render(){
        return `<polygon points="200,10 250,190 150,190" fill="${this.shapeColor}" />`;

    }
};

module.exports = {Circle, Square, Triangle}
    

