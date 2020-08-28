export {}
type ArrayCallback<T, U> = (item: T, index?: number, array?: T[]) => U

const map = <T, U>(arr: T[], f: ArrayCallback<T, U>): U[] => {
    let res: U[] = []
    for (const [i, item] of arr.entries()) {
        res.push(f(item, i, arr))
    }
    return res
}

console.log(map([1,2,3], (x: number, i: number): number => x + i))