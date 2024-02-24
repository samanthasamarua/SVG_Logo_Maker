// Importing Modules
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require("./lib/shape.js");

// Array of Questions
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter three characters:',
    },
    {
      type: 'input',
      message: 'Enter text color:',
      name: 'textColor', 
    },
    {
      type: 'list',
      message: 'Select a shape from the list below',
      name: 'shape',
      choices: ['Circle', 'Square', 'Triangle'],
    },
    {
      type: 'input',
      message: 'Enter shape color:',
      name: 'shapeColor',
    },
  ])

//  Handles User Response
  .then((response) => {
    let shapeInstance;
    if (response.shape === 'Square') {
        shapeInstance = new Square(response.text, response.shapeColor, response.textColor);
    } else if (response.shape === 'Circle') {
        shapeInstance = new Circle(response.text, response.shapeColor, response.textColor);
    } else if (response.shape === 'Triangle') {
        shapeInstance = new Triangle(response.text, response.shapeColor, response.textColor);
    } else {
        console.error('Invalid shape selected');
        return;
    }

    const svg = new Svg();
    svg.setTextElement(response.text, response.textColor);
    svg.setShapeElement(shapeInstance);

    fs.writeFile('./examples/logo.svg', svg.render(), (error) => {
        if (error) {
            console.error(error);
        } else {
            console.log('SVG file generated successfully');
        }
    });
});

// Defines SVG class 
class Svg {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }

    setTextElement(text, color) {
        this.textElement = this.generateTextElement(text, color);
    }

    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }

    generateTextElement(text, color) {
        const textX = 50;
        const textY = 50;
        
        return `<text x="${textX}" y="${textY}" font-size="20" text-anchor="middle" fill="${color}">${text}</text>`;
    }
}

module.exports = Svg;
