/* 1. Two Sum */
function twoSum(nums, target) {
    let map = new Map();
    let result = [2];
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            result[0] = map.get(target - nums[i]);
            result[1] = i;
            return result;
        }
        else {
            map.set(nums[i], i);
        }
    }
    return [-1, -1];
}
//# sourceMappingURL=TwoSum.js.map