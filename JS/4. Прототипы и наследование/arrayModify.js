//Модифицировать прототип Array, добавив в него метод shuffle, чтобы получить возможность выполнять случайную сортировку для любого массива

let array = [1,2,3,4,5,6]
Array.prototype.shuffle = function() {
    return this.sort(() => Math.random() - 0.5);
}
