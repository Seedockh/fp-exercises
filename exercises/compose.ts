export {} // This will make created types only scoped to this file
type UnaryFunc<T, U> = (x: T) => U

const compose = <T, U, V>(g: UnaryFunc<T, U>, f: UnaryFunc<U, V>) => (x: T) => f(g(x))

const toUpper = (string: string) => string.toUpperCase()
const fill = (string: string) => string.replace(/ /g,'-')

console.log(compose(toUpper, fill)("   efrei   "))