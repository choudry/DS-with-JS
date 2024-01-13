/**
 * Write a function that takes targetSum and an array of
 * numbers. The function should return boolean value
 * indicating whether or not it is possible to generate
 * the targetSum using number from the array. A single element
 * of the array can be used multiple times.
 */

const canSum = (targetSum, number, memo = {}) => {
    if (targetSum < 0) return false;
    if (targetSum === 0) return true;

    if (targetSum in memo) return memo[targetSum];

    for (let num of number) {
        const remainder = targetSum - num;
        memo[targetSum] = canSum(remainder, number, memo);
        if (memo[targetSum] === true) return true
    }

    memo[targetSum] = false;

    return false;
}

console.log(canSum(999, [6, 4]));