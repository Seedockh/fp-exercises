type UnaryFunc<T> = (x: T) => T

const partial = <T>(f: UnaryFunc<T>, ...args: T[]): UnaryFunc<T> => {
  return (x: T) => {
    args.reduce((a: T, b: T): T => f(b), args[0])
    return f(x)
  }
}

const apply = (x: number): number => {
  console.log(x)
  return x
}

partial(apply, 1, 2, 3)(4)