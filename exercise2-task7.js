//Создать пустой объект и наполнить его данными

let object = {};

object.name = 'Alex';
console.log(object)

object.lastName = 'Smith';
console.log(object)

object.name = 'Bob'
console.log(object);

delete object.name;
delete object.lastName;

console.log(object)