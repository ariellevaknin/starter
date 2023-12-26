/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/
function permutations(array) {
  if (array.length <= 1) {
    return [array];
  }

  let result = [];

  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i];
    let remainingArray = array.slice(0, i).concat(array.slice(i + 1));
    let permutationsOfRemaining = permutations(remainingArray);

    for (let j = 0; j < permutationsOfRemaining.length; j++) {
      result.push([currentElement].concat(permutationsOfRemaining[j]));
    }
  }

  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
