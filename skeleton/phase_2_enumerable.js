Array.prototype.myEach = function(callback) {

  for( i = 0; i < this.length; i++) {

      callback(this[i]);

  }
};

Array.prototype.myMap = function(callback) {
  const result = [];
  this.myEach(el => result.push(callback(el)));
  return result;
};

Array.prototype.myReduce = function(callback, initval = false) {
  let result = initval ? initval : this.shift();

  this.myEach(el => result = callback(result, el));

  return result;
};
