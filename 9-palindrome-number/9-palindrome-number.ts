function isPalindrome(x: number): boolean {
    if(x < 0 || (x % 10 == 0 && x != 0)) return false
    return parseInt(
        (x.toString())
        .split('')
        .reverse()
        .join('')
        ) === x
};