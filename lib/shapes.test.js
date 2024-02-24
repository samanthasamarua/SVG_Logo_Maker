// Import Circle, Square and Triangle shape classes from shape.js
const { Circle, Square, Triangle } = require("./shape.js");

describe('Circle Class', () => {
  test('render() method should return SVG markup for a circle with the given shape color', () => {
    const shape = new Circle();
    const color = 'red';
    shape.setColor(color); 
    expect(shape.render()).toEqual(`<circle r="45" cx="50" cy="50" fill="${color}" />`);
  });
});

describe('Square Class', () => {
    test('render() method should return SVG markup for a circle with the given shape color', () => {
      const shape = new Square();
      const color = 'blue';
      shape.setColor(color); 
      expect(shape.render()).toEqual(`<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${color}" />`);
    });
  });

  describe('Triangle Class', () => {
    test('render() method should return SVG markup for a circle with the given shape color', () => {
      const shape = new Triangle();
      const color = 'green';
      shape.setColor(color); 
      expect(shape.render()).toEqual(`<polygon points="200,10 250,190 150,190" fill="${color}" />`);
    });
  });
