console.log(twoSum([2, 7, 11, 15], 9));
/* 1.Two Sum
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
 */
function twoSum(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    nums.sort((a, b) => a - b);
    while (left <= right) {
        let sum = nums[left] + nums[right];
        if (sum === target) {
            return [left, right];
        }
        if (sum > target) {
            right -= 1;
        }
        else if (sum < target) {
            left += 1;
        }
    }
    return [-1, -1];
}
//# sourceMappingURL=TwoSum.js.map