//Реализовать функцию для фильтрации массива по длине слов

const fruits = ['orange', 'apple', 'banana', '']

const filterByLength = (array, zero, length) => array.filter(el => el.length > length || el.length === zero)

console.log(filterByLength(fruits, 0, 5)) // [‘apple’, ‘’]

