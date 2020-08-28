export {}
type ReducerCallback<T, U> = (accumulator: U | T, item: T, index?: number, array?: T[]) => U

const reduce = <T, U>(arr: T[], f: ReducerCallback<T, U>, init?: U): U |T => {
    if (arr.length === 0 && !init) throw 'You have to specify either non-empty array or initial value.'

    let res: U | T = init ?? arr[0]
    for (const [i, item] of arr.entries()) {
        if (i === 0 && !init) continue
        res = f(res, item, i, arr)
    }
    return res
}

console.log(reduce([1,2,3,4,5,6,7,7,7], (a,b) => a+b))