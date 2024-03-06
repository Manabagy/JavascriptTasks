

let reverse = function (array) {
  let arr = [];

  let m = 0;
  let i = array.length - 1;

  while (m < array.length) {
    arr[m] = array[i];
    m++;
    i--;
  }
  return arr;
}

console.log(reverse([1, 2, 3, 4]));