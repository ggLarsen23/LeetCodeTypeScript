search([5], 5);
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    // 10-0 - 0 / 2
    // 10-5 - 5 / 2
    // 10 - 5 = 5, 5 / 2 = 3 + left = 8
    // 8 - 5 = 3, / 2 = 2, 5 + 2 = 7
    while (left < right) {
        let mid = Math.floor((right - left) / 2) + left;
        if (target === nums[mid]) {
            return mid;
        }
        else if (target > nums[mid]) {
            left = mid + 1;
        }
        else if (target < nums[mid]) {
            right = mid - 1;
        }
    }
    return -1;
}
//# sourceMappingURL=BinarySearch.js.map