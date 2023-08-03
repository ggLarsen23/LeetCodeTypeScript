isAnagram("anagram", "anagrma");
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let sCountMap = new Map();
    let tCountMap = new Map();
    for (const char of s) {
        sCountMap.set(char, (sCountMap.get(char) || 0) + 1);
    }
    for (const char of t) {
        tCountMap.set(char, (tCountMap.get(char) || 0) + 1);
    }
    for (const [char, frequency] of sCountMap) {
        if (frequency !== tCountMap.get(char)) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=ValidAnagram.js.map