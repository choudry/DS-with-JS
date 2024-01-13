/**
 * Write a function that takes targetSum and array of numbers as arguments,
 * and returns array of numbers that adds up exactly targetSum. If there's
 * no combination that add up to the targetSum, then return null.
 */

/**
 * @param { Number } targetSum 
 * @param { Array } numbers 
 */
const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum < 0) return null;
    if (targetSum === 0) return [];
    if (targetSum in memo) return memo[targetSum];

    for (let number of numbers) {
        const remainder = targetSum - number;
        const result = howSum(remainder, numbers, memo);
        if (result !== null) {
            memo[targetSum] = [...result, number];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}

console.log(howSum(300, [7, 14]));