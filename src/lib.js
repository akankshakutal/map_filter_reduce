const map  = function(functionCallback,elements) {
  let result = [];
  for(element of elements) {
    result.push(functionCallback(element));
  }
  return result;
}

exports.map = map;
