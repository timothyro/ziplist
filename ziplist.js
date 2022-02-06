const arrA = ['a', 'b', 'c'];
const arrB = [1, 2, 3];

function zipList(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
    newArr.push(arr2[i]);
  }
  return newArr;
}
console.log(zipList(arrA, arrB));

function zipListTheSimpleWay(arr1, arr2) {
  const x = _.zip(arr1, arr2);
  return _.flatten(x);
}
console.log(zipListTheSimpleWay(arrA, arrB));
