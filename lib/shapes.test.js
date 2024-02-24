// Import Circle, Square and Triangle shape classes from shape.js
const { Circle, Square, Triangle } = require("./shape.js");


// Test cases - Checks is objects can be rendered correctly by calling the render method and comparing the result to an expected SVG string

// Circle Shape
describe('Circle Class', () => {
  test('render() method should return SVG markup for a circle with the given shape color', () => {
    const shape = new Circle();
    const color = 'red';
    shape.setColor(color); 
    expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}" />${this.text}`);
  });
});

// Square Shape
describe('Square Class', () => {
    test('render() method should return SVG markup for a circle with the given shape color', () => {
      const shape = new Square();
      const color = 'blue';
      shape.setColor(color); 
      expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}" />${this.text}`);
    });
  });

// Triangle Shape
  describe('Triangle Class', () => {
    test('render() method should return SVG markup for a circle with the given shape color', () => {
      const shape = new Triangle();
      const color = 'green';
      shape.setColor(color); 
      expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}" />${this.text}`);
    });
  });
