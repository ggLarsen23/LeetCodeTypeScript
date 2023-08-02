/* 1. Two Sum */
function twoSum(nums: number[], target: number): number[] {
    let map: Map<number, number> = new Map();
    let result: number[] = [2];

    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            result[0] = map.get(target - nums[i]);
            result[1] = i;
            return result;
        } else {
            map.set(nums[i], i);
        }
    }
    return [-1, -1];
}
