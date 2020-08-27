export {}
type UnaryFunc<T> = (x: T) => T

const memoize = <T>(f: UnaryFunc<T>): UnaryFunc<T> => {
    let cache: Record<string, T> = {}
    
    const cacheAndReturn = (y: T): T => {
        cache[`${y}`] = f(y)
        return cache[`${y}`]
    }

    return (x: T): T => cache[`${x}`] ?? cacheAndReturn(x)
}

const double = (x: number) => x*2
const cacheDouble = memoize(double)

console.log(cacheDouble(2))
console.log(cacheDouble(64))
console.log(cacheDouble(128))
console.log(cacheDouble(64))
console.log(cacheDouble(2))
console.log(cacheDouble(512))
