/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const memo = {};

    for (let index in nums) {
        const number = nums[index];
        const remainder = target - number;
        
        if (remainder in memo) {
            return [memo[remainder], index]
        }

        memo[number] = index;
    }
};

console.log(twoSum([2, 3, 5], 5))