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

/*------------------------- Tests ---------------*/
describe ("map",function() {
  it("should work for empty array",function(){
    assert.deepEqual(lib.map(square,[]),[]);
  });
  it("should work for one element array",function(){
    assert.deepEqual(lib.map(square,[1]),[1]);
  });
  it("should work for more than one element",function(){
    assert.deepEqual(lib.map(square,[1,2,3]),[1,4,9]);
    assert.deepEqual(lib.map(cube,[1,2,3]),[1,8,27]);
  });
  it("should work for negative numbers",function(){
    assert.deepEqual(lib.map(increment,[-4,-5,-6]),[-3,-4,-5]);
  });
});


describe ("filter",function() {
  it("should work for empty array",function(){
    assert.deepEqual(lib.filter(isEven,[]),[]);
  });
  it("should work for one element array",function(){
    assert.deepEqual(lib.filter(square,[11]),[11]);
  });
  it("should work for more than one element",function(){
    assert.deepEqual(lib.filter(greaterThan,[1,2,30]),[30]);
    assert.deepEqual(lib.filter(isEven,[1,2,4]),[2,4]);
  });
  it("should work for negative numbers",function(){
    assert.deepEqual(lib.filter(greaterThan,[-10,-11,2,3,60]),[60]);
  });
});

