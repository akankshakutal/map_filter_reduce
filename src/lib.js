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

const recursiveMap = function(mapper,list,result=[]){
  if(list.length == 0) {
    return result;
  }
  result.push(mapper(list[0]));
  return recursiveMap(mapper,list.slice(1),result);
}

exports.reduce = reduce;
exports.filter = filter;
exports.map = map;
exports.recursiveMap = recursiveMap;
