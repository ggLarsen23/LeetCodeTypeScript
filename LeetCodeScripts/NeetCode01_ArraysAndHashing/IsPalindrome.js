console.log(isPalindrome("anagram", "nagaram"));
function isPalindrome(s, t) {
    var sArray = s.split("");
    var sArrayBack = sArray.reverse();
    var i = 0;
    if (JSON.stringify(sArrayBack) == JSON.stringify(t.split(""))) {
        return true;
    }
    else
        return false;
}
