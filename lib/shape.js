// Defines a class called Shape, which has a constructor initialising the shape color, text and text color

class Shape {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }

    setColor(color) {
        this.shapeColor = color;
    }
}


// Defines a circle class and extends shape and renders and SVG circle based on specifications below. 
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}" />${this.text}`;
    }
}


// Defines a Square class and extends shape and renders and SVG circle based on specifications below.
class Square extends Shape{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.shapeColor}" />${this.text}`;
    }
}

// Defines a Triangle class and extends shape and renders and SVG circle based on specifications below.
class Triangle extends Shape{
    render(){
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColor}" />${this.text}`;

    }
};

module.exports = {Circle, Square, Triangle}
    