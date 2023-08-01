isAnagram("anagram", "anagrma");

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    let sCountMap: Map<string, number> = new Map();
    let tCountMap: Map<string, number> = new Map();

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
