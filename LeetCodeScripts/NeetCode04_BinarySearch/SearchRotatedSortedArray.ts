/* 33. Search in rotated sorted array */
function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    // 1 2 3 4 5 6 7 8
    // 5 6 7 0 1 2 3 4
    //  1     10     20
    while (left <= right) {
        const mid = Math.floor((left+right)/2)
        if (nums[mid] == target) {
            return mid;
        }
        let midVal = nums[mid];
        // Check if the left half is sorted
         if (nums[left] <= midVal) {
            if (target > midVal || target < nums[left]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        } 
        // right portion sorted
        else {
            if (target > nums[right] || target < midVal) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }
    return -1;
}