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
      message: 'Enter up to (3) characters:',
      validate: function(input) {
        if (input.length > 3) {
            return 'Please enter up to 3 characters only!';
        }
        return true;
      }
    },
    {
      type: 'input',
      message: 'Text Color: Enter a color keyword of hexadecimal number',
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
      message: 'Shape Color: Enter a color keyword or hexadecimal number:',
      name: 'shapeColor',
    },
  ])

//  Handles User input
  .then((response) => {
    let shapeInstance;

    if (response.shape === 'Square') {
        shapeInstance = new Square(response.shapeColor, response.textColor, response.text);

    } else if (response.shape === 'Circle') {
        shapeInstance = new Circle(response.shapeColor, response.textColor, response.text);

    } else if (response.shape === 'Triangle') {
        shapeInstance = new Triangle(response.shapeColor, response.textColor, response.text);
    } else {
        console.error('Invalid shape selected');
        return;
    }

    const svg = new Svg();

// Setting text and shape elements
    svg.setTextElement(response.text, response.textColor);
    svg.setShapeElement(shapeInstance);

// Writes to file
    fs.writeFile('./logo.svg', svg.render(), (error) => {
        if (error) {
            console.error(error);
        } else {
            console.log('SVG file generated successfully');
        }
    });
});

// Defines SVG class 
class Svg {

    // Constructor method - Initialises two properties which will store the SVG text and shape elements respectively
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }
    // Render method returns SVG string that combine shape and text eement
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }

    setTextElement(text, color) {
        console.log('Text:', text);
        console.log('Color:', color);
        this.textElement = this.generateTextElement(text, color);
        
    }

    setShapeElement(shape) {
        console.log('Shape:', shape)
        this.shapeElement = shape.render();
    }

    generateTextElement(text, color) {
        // Set text position based on shape
        const shapeX = 50; 
        const shapeY = 50; 
        const shapeWidth = 100;
        const shapeHeight = 100; 
        
        // Calculate text x,y coordinate based on shape
        const textX = shapeX + shapeWidth / 2;
        const textY = shapeY + shapeHeight / 2; 
        
        return `<svg>
            ${this.shapeElement}
            <text x="${textX}" y="${textY}" font-size="50" dominantBaseline="middle" textAnchor="middle" fill="${color}">${text}</text>
        </svg>`;
    }
}

module.exports = Svg;
