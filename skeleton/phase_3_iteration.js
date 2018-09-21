Array.prototype.bubbleSort = function() {
  let arr = this;
  for ( i = 0; i  < arr.length-1 ; i++) {
    for ( j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j+1]) {
        arr[j+1] = [arr[j], arr[j] = arr[j+1]][0];
      }
    }
  }
  return arr;
};

String.prototype.substrings = function() {
  const result = [];
  for (i=0; i <= this.length; i++) {
    for (j=i+1; j <= this.length; j++) {
      result.push(this.slice(i, j));
    }
  }
  return result;
};
