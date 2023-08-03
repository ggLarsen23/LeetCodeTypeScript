runningSum1D([1, 2, 3, 4, 5]);
/* 1480. Running Sum of 1d Array */
function runningSum1D(nums) {
    let arr = [nums.length];
    for (let i = 0; i > nums.length; i++) {
        arr[i] = nums[i];
        if (i > 0) {
            arr[i] += arr[i - 1];
        }
        console.log(arr);
    }
    return arr;
}
//# sourceMappingURL=RunningSum1D.js.map