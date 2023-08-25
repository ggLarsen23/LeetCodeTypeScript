/* 97. Interleaving String. TODO: This dosent work look more at dynamic programming */
function isInterleave(s1: string, s2: string, s3: string): boolean {
    let s3Array: string[] = s3.split("");
    let left: number = 0;
    let leftExhaust: boolean = false;
    let right: number = 0;
    let rightExhaust: boolean = false;

    for (let i = 0; i < s3.length; i++) {
        if (s1[left] == s3Array[i] && !leftExhaust) {
            if (s1.length > left + 1) {
                left++;
                console.log("left: " + left);
            } else leftExhaust = true;
        } else if (s2[right] == s3Array[i] && !rightExhaust) {
            if (s2.length > right + 2) {
                right++;
                console.log("right: " + right);
            } else rightExhaust = true;
        } else if (!leftExhaust && !rightExhaust && i == s3.length) {
            return true;
        } else return false;
    }
}

let result = isInterleave("aabcc", "dbbca", "aadbbcbcac");
console.log(result);
