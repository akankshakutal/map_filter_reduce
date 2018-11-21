const map  = function(mapper,elements) {
  let result = [];
  for(element of elements) {
    result.push(mapper(element));
  }
  return result;
}

const filter = function(predicate,elements) { 
  let result = [];
  for(element of elements) {
    if(predicate(element)) {
      result.push(element);
    }
  }
  return result;
}

const reduce = function(reducer,elements,accumulator) { 
  let startingIndex = 0;
  if(accumulator == undefined) {
    startingIndex = 1;
    accumulator = elements[0]
  }
  let result = accumulator;
  for(let index = startingIndex; index<elements.length; index++) {
    result = reducer(result,elements[index]);
  }
  return result;
}

exports.reduce = reduce;
exports.filter = filter;
exports.map = map;
