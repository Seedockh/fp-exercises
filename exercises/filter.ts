export {}
type ArrayCallback<T, U> = (item: T, index?: number, array?: T[]) => U

const filter = <T, U>(arr: T[], f: ArrayCallback<T, U>): T[] => {
    let res: T[] = []
    for (const [i, item] of arr.entries()) {
        if (f(item, i, arr)) res.push(item)
    }
    return res
}

console.log(filter([1,2,3,4,5,6], (x: number): boolean => x > 3))


