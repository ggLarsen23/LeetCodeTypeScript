console.log(twoSum2([2, 7, 11, 15], 9));

/* 167. Two Sum II - Input Array Is Sorted 
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
 */
function twoSum2(nums: number[], target: number): number[] {
    let left: number = 0;
    let right: number = nums.length - 1;
    nums.sort((a, b) => a - b);

    while (left <= right) {
        let sum: number = nums[left] + nums[right];
        if (sum === target) {
            return [left, right];
        }
        if (sum > target) {
            right -= 1;
        } else if (sum < target) {
            left += 1;
        }
    }
    return [-1, -1];
}
