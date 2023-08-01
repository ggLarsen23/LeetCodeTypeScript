console.log(isPalindrome("anagram", "nagaram"));

function isPalindrome(s: string, t: string): boolean {
    let sArray: string[] = s.split("");
    let sArrayBack: string[] = sArray.reverse();
    let i: number = 0;

    if (JSON.stringify(sArrayBack) == JSON.stringify(t.split(""))) {
        return true;
    } else return false;
}
