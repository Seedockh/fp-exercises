export {}
type UnaryFunc<T, U> = (x: T) => U
type Class = { class: string, value: number }

const groupBy = <T>(f: UnaryFunc<Class, string>, arr: Class[]): T[] => {
  return arr.reduce(<U>(groups: U[], item: Class) => {
    return {
      ...groups,
      [f(item)]: [
        ...groups[f(item)] || [],
        item
      ]
    }
  }, [])
}

console.log(groupBy(item => item.class, [
    { class: "first", value: 3 },
    { class: "third", value: 26 },
    { class: "second", value: 18 },
    { class: "second", value: 11 },
    { class: "first", value: 5 },
    { class: "first", value: 7 },
    { class: "third", value: 27 },
    { class: "first", value: 9 },
    { class: "second", value: 14 },
  ])
)

