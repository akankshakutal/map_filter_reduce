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
exports.filter = filter;
exports.map = map;
