// Import Circle, Square and Triangle shape classes from shape.js

const {Circle, Square, Triangle} = require(".shapes.js")


describe('Circle Class', () => {
  test('render() method should return SVG markup for a circle with the given shape color', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toEqual('<circle r="45" cx="50" cy="50" fill="red" />');
  });
});

describe('Square Class', () => {
  test('render() method should return SVG markup for a square with the given shape color', () => {
    const square = new Square();
    square.setColor('blue');
    expect(square.render()).toEqual('<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="blue" />');
  });
});

describe('Triangle Class', () => {
  test('render() method should return SVG markup for a triangle with the given shape color', () => {
    const triangle = new Triangle();
    triangle.setColor('green');
    expect(triangle.render()).toEqual('<polygon points="200,10 250,190 150,190" fill="green" />');
  });
});
