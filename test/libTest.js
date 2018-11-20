const assert = require("assert");
const lib = require("../src/lib.js");

/*------------------------ UtilFunctions --------------------*/

const square = function(element) { 
  return element * element;
}

const cube = function(element) { 
  return element * element * element;
}

const increment = function(element) { 
  return element+1;
}

const isEven = function(element) { 
  return (element%2 == 0)
}

const greaterThan = function(element) { 
  return element>10;
}

const greatestNumber = function() { 
  
}
/*------------------------- TestFunction ---------------------*/

const test = function(functionName,inputs,expectedOutput) { 
  let actualOutput = functionName(inputs[0],inputs[1]);
  assert.deepEqual(actualOutput,expectedOutput);
}

/*------------------------- Tests ---------------*/
const testMap = function() { 
  let inputs = [square,[]];
  let expectedOutput = [];
  test(lib.map,inputs,expectedOutput);

  inputs = [square,[2]];
  expectedOutput = [4];
  test(lib.map,inputs,expectedOutput);

  inputs = [cube,[1,2,3]];
  expectedOutput = [1,8,27];
  test(lib.map,inputs,expectedOutput);

  inputs = [increment,[-4,-5,-6]];
  expectedOutput = [-3,-4,-5];
  test(lib.map,inputs,expectedOutput);
}

const testFilter = function() { 
  inputs = [isEven,[]];
  expectedOutput = [];
  test(lib.filter,inputs,expectedOutput);

  inputs = [greaterThan,[11]];
  expectedOutput = [11];
  test(lib.filter,inputs,expectedOutput);

  inputs = [greaterThan,[-10,-11,2,3,60]];
  expectedOutput = [60];
  test(lib.filter,inputs,expectedOutput);
}

testMap();
testFilter();

