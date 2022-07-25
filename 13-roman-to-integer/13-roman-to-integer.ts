function romanToInt(s: string): number {
const dictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
let number = 0
let previousLetterValue = 0
s.split('').reverse().forEach((letter, idx) => {
    if(dictionary[letter] < previousLetterValue)
        number -= dictionary[letter]
    else
        number += dictionary[letter]
    previousLetterValue = dictionary[letter]
    
   
})
    return number
};