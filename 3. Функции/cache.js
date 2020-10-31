const cache = () => {
    let dataCache = {
        value: null,
        fromCache: false,
    };
    return function (a, b) {
        if (a ** b === dataCache.value) {
            return {value: dataCache.value, fromCache: true}
        }
        return {value: dataCache.value = a ** b, fromCache: dataCache.fromCache}
    }
}

let calculate = cache();

console.log(calculate(3,3));
console.log(calculate(2,3));
console.log(calculate(3,3));
console.log(calculate(3,3));