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

const sumOfAllElements = function(element1,element2) { 
  return element1 + element2 ;
}

const max = function(element1,element2) { 
  return Math.max(element1,element2);
}

/*------------------------- Tests ---------------*/
describe ("map",function() {
  it("should return empty array for empty array",function(){
    assert.deepEqual(lib.map(increment,[]),[]);
  });
  it("should return one element array for one element array",function(){
    assert.deepEqual(lib.map(square,[1]),[1]);
  });
  it("should preserve the length of array of multiple elements",function(){
    assert.deepEqual(lib.map(square,[1,2,3]),[1,4,9]);
    assert.deepEqual(lib.map(cube,[1,2,3]),[1,8,27]);
  });
});


describe ("filter",function() {
  it("should return empty array for empty array",function(){
    assert.deepEqual(lib.filter(isEven,[]),[]);
  });
  it("should return whole array for all truthy values",function(){
    assert.deepEqual(lib.filter(isEven,[0,2,4,6]),[0,2,4,6]);
  });
  it("should return empty array for all falsy values",function(){
    assert.deepEqual(lib.filter(isEven,[1,3,5,7]),[]);
  });
  it("should return only truthy values from give array",function(){
    assert.deepEqual(lib.filter(isEven,[1,2,3,4,5,6]),[2,4,6]);
  });
});

describe ("reduce",function() {
  it("should return undefined for empty array without accumulator",function(){
    assert.deepEqual(lib.reduce(sumOfAllElements,[]),undefined);
  });
  it("should return accumulator value for empty array with accumulator value",function(){
    assert.deepEqual(lib.reduce(max,[],2),2);
  });
  it("should return one value for array of multiple element",function(){
    assert.deepEqual(lib.reduce(sumOfAllElements,[1,2,30]),33);
    assert.deepEqual(lib.reduce(max,[4,2,1],2),4);
  });
  it("should return undefined for array element as undefined ",function(){
    assert.deepEqual(lib.reduce(max,[undefined]),undefined);
  });
});

describe ("map using Recursion",function() {
  it("should return empty array for empty array",function(){
    assert.deepEqual(lib.recursiveMap(increment,[]),[]);
  });
  it("should return one element array for one element array",function(){
    assert.deepEqual(lib.recursiveMap(square,[1]),[1]);
  });
  it("should preserve the length of array of multiple elements",function(){
    assert.deepEqual(lib.recursiveMap(square,[1,2,3]),[1,4,9]);
    assert.deepEqual(lib.recursiveMap(cube,[1,2,3]),[1,8,27]);
  });
});

describe ("filter using recursion",function() {
  it("should return empty array for empty array",function(){
    assert.deepEqual(lib.recursiveFilter(isEven,[]),[]);
  });
  it("should return whole array for all truthy values",function(){
    assert.deepEqual(lib.recursiveFilter(isEven,[0,2,4,6]),[0,2,4,6]);
  });
  it("should return empty array for all falsy values",function(){
    assert.deepEqual(lib.recursiveFilter(isEven,[1,3,5,7]),[]);
  });
  it("should return only truthy values from give array",function(){
    assert.deepEqual(lib.recursiveFilter(isEven,[1,2,3,4,5,6]),[2,4,6]);
  });
});
