function isSubsequence(s: string, t: string): boolean {
if (s.length === 0) return true
    if(s.length > t.length) return false
let currentSIdx = -1
    for(let i = 0; i < t.length; i++){
        if(s[currentSIdx + 1 ] === t[i]){
            currentSIdx++
        }
        if(currentSIdx === s.length - 1) break
    }
    return currentSIdx === s.length - 1
};