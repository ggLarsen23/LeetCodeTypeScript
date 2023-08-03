/* 49. Group Anagrams */
function groupAnagrams(strs) {
    let sortedMap = new Map();
    for (const word in strs) {
        let charArray = word.split("");
        let sortedWord = charArray.sort().toString();
        const key = sortedWord;
        if (!sortedMap.has(key)) {
            sortedMap.set(key, []);
        }
        sortedMap.get(key).push(word);
    }
    return Array.from(sortedMap.values());
}
//# sourceMappingURL=ValidSudoku.js.map