Array.prototype.uniq = function() {
  const result = [];
  this.forEach(el => {
    if (!result.includes(el)) {
      result.push(el);
    }
  });
  return result;
};

Array.prototype.twoSum = function() {
  const result = [];
  for (i=0; i < this.length - 1; i++) {
    for (j = i+1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
};


Array.prototype.transpose = function() {
  const result = [];

  for (i = 0; i < this.length; i++) {
    result.push([]);
    for (j = 0; j < this.length; j++) {
      result[i].push(this[j][i]);
    }
  }
  return result;
};
