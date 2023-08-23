/* 3. Longest Substring Without Repeating Characters */
function lengthOfLongestSubstring(s: string): number {
    if (s.length == 0) return 0;
    const charSet = new Set();
    let left = 0;
    let right = 0;
    let result = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left += 1;
        }
        charSet.add(s[right]);
        result = Math.max(result, right - left + 1);
    }
    return result;
};