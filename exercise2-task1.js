//Реализовать функцию, которая принимает текст, и возвращает массив объектов со структурой

const isCapitalized = str => str.toUpperCase() === str && str.toLowerCase() !== str

let string = 'Я люблю Теслу 123';
let newArray = string.split(' ').map((word) => ({ word: word, length: word.length, isCapitalized: isCapitalized(word) }))
console.log(newArray)


