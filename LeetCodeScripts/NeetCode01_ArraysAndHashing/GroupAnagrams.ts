groupAnagrams(["ate", "tan", "nat"]);

/* 49. Group Anagrams */
function groupAnagrams(strs: string[]): string[][] {
    let sortedMap: Map<String, string[]> = new Map();

    for (const word of strs) {
        let charArray: string[] = word.split("");
        let sortedWord: string = charArray.sort().toString();
        const key: string = sortedWord;

        if (!sortedMap.has(key)) {
            sortedMap.set(key, []);
        }
        sortedMap.get(key).push(word);
    }

    return Array.from(sortedMap.values());
}
