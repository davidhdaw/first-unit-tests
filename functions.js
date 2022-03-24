// functions.js
function addTwoNumbers(num1, num2) {
  return num1 + num2;
};

function sayHello(name) {
  if (name === 'will' || name === 'Will') {
    return `No more testing ${name}!`
  } else {
    return `Hi there ${name}!`
  }
};

var result = {};

//This function builds an object with color and type keys and produces an empty object if you haven't defined those things.
//feels like it does all those wrong though so it might be worth cleaning up the code here.
function buildCar(color, type) {
  if (color === undefined && type === undefined) {
    return {};
  } else
{  result.color = color;
  result.type = type;
  return result; }
  };

  console.log(buildCar('red', 'good'));

  module.exports = {
      addTwoNumbers,
      sayHello,
      buildCar
  };
