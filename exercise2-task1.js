//Реализовать функцию, которая принимает текст, и возвращает массив объектов со структурой
const isCapitalized = str => str[0] === str[0].toUpperCase()

let string = 'Я люблю теслу';
let newArray = string.split(' ').map((word) => ({ word: word, length: word.length, isCapitalized: isCapitalized(word) }))
console.log(newArray)


