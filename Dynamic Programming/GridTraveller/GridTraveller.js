/**
 * In how many ways you can travel from the top left corner of a two dimensional 
 * grid to the bottom right corner of the grid, when you can only move down and right.
 * Grid dimension: m * n
 */

const gridTraveller = (m, n, memo= {}) => {
    if (m === 0 || n === 0) return 0; // if row or column of a grid is zero, then it's an invalid input

    /**
     * Base case: if row or column is 1, then then there is only a
     * single base case. We can move right if row is one and down if column is one.
     */

    if (m === 1 || n === 1) return 1; 

    const pos = m + ',' + n;
    if (pos in memo) return memo[pos]

    memo[pos] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
    return memo[pos];
}

console.log(gridTraveller(2, 4));

/**
 * In every step, either we can move down or right. If we move down, then number of rows decreased 
 * which is (m - 1) and if we move right then number of column decreased which is (n - 1)
 */

/******** Tabulation **/
/**
 * 
 * @param {Number} m // rows
 * @param {Number} n // columns 
 */
const gridTravellerTabulation = (m, n) => {
 const table = Array(m + 1)
    .map(() => Array(n + 1).fill(0));

 table[1][1] = 1;

}

function isAnyStringInArray(array) {
    // Check if the array is empty.
    if (array.length === 0) {
      return false;
    }
  
    // Iterate through the array and check if any element is a string.
    for (const element of array) {
      if (typeof element === "string") {
        return true;
      }
    }
  
    // No string elements found.
    return false;
  }

  console.log(isAnyStringInArray([1,2,3]));