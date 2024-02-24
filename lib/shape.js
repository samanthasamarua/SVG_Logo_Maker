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
        console.log('Rendering Circle...');
        console.log('Shape color:', this.shapeColor);
        console.log('Text:', this.text);
        return `<circle r="45" cx="50" cy="50" fill="${this.shapeColor}" />${this.text}`;
    }
}


// Defines a Square class and extends shape and renders and SVG circle based on specifications below.
class Square extends Shape{
    render(){
        console.log('Rendering Square...');
        console.log('Shape color:', this.shapeColor);
        console.log('Text:', this.text);
        return `<rect width="100" height="100" x="10" y="10" fill="${this.shapeColor}" />${this.text}`;
    }
}

// Defines a Triangle class and extends shape and renders and SVG circle based on specifications below.
class Triangle extends Shape{
    render(){
        console.log('Rendering Triangle...');
        console.log('Shape color:', this.shapeColor);
        console.log('Text:', this.text);
        return `<polygon points="200,10 250,190 150,190" fill="${this.shapeColor}" />${this.text}`;

    }
};

module.exports = {Circle, Square, Triangle}
    