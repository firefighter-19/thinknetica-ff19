function cache() {
    let cacheStore = new Map();
    return function(a, b) {
        let value = a ** b;
        let fromCache;
        if (!cacheStore.has(value)) {
            cacheStore.set(value, a ** b)
            .set(fromCache, true)
            return cacheStore.get(value)
        }
        return cacheStore.get(fromCache)
    }
}

let calculate = cache();

console.log (calculate(3, 3));
console.log (calculate(3, 3));
console.log (calculate(2, 10));
console.log (calculate(3, 3));
