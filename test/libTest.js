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

/*------------------------- TestFunction ---------------------*/

const testFunction = function(functionName,inputs,expectedOutput) { 
  let actualOutput = functionName(inputs[0],inputs[1]);
  assert.deepEqual(actualOutput,expectedOutput);
}

/*------------------------- Tests ---------------*/

let inputs = [square,[]];
let expectedOutput = [];
testFunction(lib.map,inputs,expectedOutput);

inputs = [square,[2]];
expectedOutput = [4];
testFunction(lib.map,inputs,expectedOutput);

inputs = [cube,[1,2,3]];
expectedOutput = [1,8,27];
testFunction(lib.map,inputs,expectedOutput);

inputs = [increment,[-4,-5,-6]];
expectedOutput = [-3,-4,-5];
testFunction(lib.map,inputs,expectedOutput);
