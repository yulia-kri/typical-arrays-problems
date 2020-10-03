
exports.min = function min (array) {
  return (arguments.length == 0 || array.length == 0 ? 0 : Math.min.apply(null, array));
}

exports.max = function max (array) {
  return (arguments.length == 0 || array.length == 0 ? 0 : Math.max.apply(null, array));
}

exports.avg = function avg (array) {
  if(arguments.length == 0 || array.length == 0) {
    return 0;
  }
    let sum = 0;
    array.forEach(i => sum += i);
    return sum/array.length;
}
