/** PROGRAMMATION FONCTIONNELLE */
// IterableIterator<T> => array plus pratique pour boucler dessus
// * + yield => crée un Generator qui s'interrompt à chaque itération, pour faire un appel Lazy itération par itération
/*
const compose = <T, U, V>(g: UnaryFunc<T, U>, f: UnaryFunc<U, V>) => (x: T) => f(g(x))

const filter = <T>(f: (x: T) => boolean) => {
  return function* (arr: IterableIterator<T>) {
    for (const item of arr) {
      if (f(item)) yield item
    }
  }
}

type NullaryFunc<T> = () => T
type UnaryFunc<T, U> = (x: T) => U
type BinaryFunc<T, U, V> = (x: T, y: U) => V
type TertiaryFunc<T, U, V, W> = (x: T, y: U, z: V) => W
type InfinaryFunc<T, U> = (...x: T[]) => U
*/

export {}
type UnaryFunc<T, U> = (x: T) => U

const groupBy = <T, U, V>(f: UnaryFunc<T, U>, arr: U[]): U[] => {
    return []
}

