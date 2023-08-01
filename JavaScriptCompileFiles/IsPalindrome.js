console.log(isPalindrome("anagram", "nagaram"));
function isPalindrome(s, t) {
    let sArray = s.split("");
    let sArrayBack = sArray.reverse();
    let i = 0;
    if (JSON.stringify(sArrayBack) == JSON.stringify(t.split(""))) {
        return true;
    }
    else
        return false;
}
//# sourceMappingURL=IsPalindrome.js.map