export {}
type UnaryFunc<T> = (x: T) => T
type InfinaryFunc<T> = (...x: T[]) => T

const compose = <T>(first: UnaryFunc<T>, ...rest: UnaryFunc<T>[]): InfinaryFunc<T> =>
  rest.reduce((a: UnaryFunc<T>, b: UnaryFunc<T>) => (x: T): T => b(a(x)), first)

const toUpper = (string: string): string => string.toUpperCase()
const fill = (string: string): string => string.replace(/ /g,'-')
const unDash = (string: string): string => string.replace(/-/g,'')

console.log(compose(toUpper, fill, unDash)("   efrei   "))
