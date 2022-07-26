function isIsomorphic(s: string, t: string): boolean {
if(s.length !== t.length) return false
const dictionary = new Map()
for(let i = 0; i < s.length; i++){
  if(! dictionary.has(s[i])){
      if( (Array.from(dictionary.values())).indexOf(t[i]) !== -1 ) return false
      else dictionary.set(s[i], t[i])
  }
    else
        if(dictionary.get(s[i]) !== t[i]) return false
    
}
    return true
};