function range(start, end) {
  if (start === end) {
    return [];
  }

  let r = range(start, end -1);
  r.push(end-1);
  return r;
}

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  let result = arr[0];
  arr.shift();
  result += sumRec(arr);
  return result;

}

function fib(n) {
  if (n === 2) {
    return [0, 1];
  }

  let result = fib(n-1);
  result.push(result[result.length - 2]+ result[result.length - 1]);
  return result;

}
