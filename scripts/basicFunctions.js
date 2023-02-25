
// basic functions, array, manipulation, and console output, used for practice


//2 number comparision
const isEqual = (a, b) => {
    if(a === 100 || b === 100) {
        return true
    } return false
}
const isEqualConsice = (a, b) =>  a === 100 || b === 100 || a + b === 100 

console.log(isEqual(10, -10))
console.log(isEqualConsice(50, 50))

// get extension of a filename
const getFileExtension = (str) => {
    return str.slice(str.lastIndexOf('.'))
}
console.log(getFileExtension('asdfasdfa.html'))

// shift string character forward in alphabet (ceasar cypher)
// doesn't account for z wrapping to a
const cypher = (str) => {
    return newStr = str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('')
}
console.log(cypher('hello'))

// pre-pend new onto a string
const newString = (str) => {
    let newStr = str.indexOf('new') == 0 ? str : `new-${str}`
    return newStr
}
console.log(newString('feature'))


// for strings of at least 3 characters, take the first 3 and last 3 character and return them together
const splicingString = (str) => {
    return str.length < 3 ? str : str.slice(0, 3) + str.slice(-3)
}
console.log(splicingString('somethings are better'))
console.log(splicingString('no'))

// extract first half of string with even number of characters
const halfString = (str) => {
    return str.length % 2 !== 0 ? false : str.slice(0, str.length/2)
}
console.log(halfString('somethings are better left unsaid'))
console.log(halfString('are'))
console.log(halfString('even characters!'))

// add two strings together, stripping out the first characters of each
const randomStringConcat = (str1, str2) => {
    return str1.slice(1) + str2.slice(1)
}
console.log(randomStringConcat('test', 'developer'))

// given 2 numbers, find out which one is closer to 100
// doesn't handle edge cases
const close100 = (a, b) => {
    return (100 - a ) > (100 - b) ? a : b
}
console.log(close100(12, 4234))
console.log(close100(12234, 42))

// check occurrences of specfic character
const specificCharacter = (str, char) => {
    return str.split('').filter(ch => ch === char).length
}
console.log(specificCharacter('somethings are better left unsaid', 's'))
console.log(specificCharacter('some', 's'))

