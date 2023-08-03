maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
/* 11. Container With Most Water */
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let mostWater = 0;
    while (left < right) {
        let water = 0;
        if (height[left] < height[right]) {
            water = height[left] * (right - left);
        }
        else {
            water = height[right] * (right - left);
        }
        if (water > mostWater) {
            mostWater = water;
        }
        if (height[left] <= height[right]) {
            left += 1;
        }
        else {
            right -= 1;
        }
    }
    return mostWater;
}
//# sourceMappingURL=ContainerWithMostWater.js.map