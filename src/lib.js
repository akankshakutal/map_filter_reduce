const map  = function(functionCallback,elements) {
  let result = [];
  for(element of elements) {
    result.push(functionCallback(element));
  }
  return result;
}

const filter = function(functionCallback,elements) { 
  let result = [];
  for(element of elements) {
    if(functionCallback(element)) {
      result.push(element);
    }
  }
  return result;
}

const reduce = function(functionCallback,elements,accumulator = elements[0]) { 
  let result = accumulator;
  for(let index = 1; index<elements.length; index++) {
    result = functionCallback(result,elements[index]);
  }
  return result;
}

exports.reduce = reduce;
exports.filter = filter;
exports.map = map;
