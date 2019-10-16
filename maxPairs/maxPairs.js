function maxPairs(list1, list2, max) {
  list1.sort((a, b) => b[1] - a[1]);
  list2.sort((a, b) => b[1] - a[1]);

  console.log(list1, list2);
}

function bin_search(arr, val) {
  const mid = Math.ceil(arr / 2);

  if (arr[mid][1]) {

  }
}

maxPairs([[1, 3], [2, 6], [3, 5]],[[1, 2], [2, 7], [3, 4]],10)