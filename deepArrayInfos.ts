type DeepArray = Array<number | DeepArray>

const deepSum = (arr: DeepArray) => 
    arr.reduce((a: number, b: DeepArray) => Array.isArray(b) ? a + deepSum(b) : a + b, 0)

const deepDepth = (arr: DeepArray) => Array.isArray(arr) ? Math.max(...arr.map(deepDepth)) + 1 : 0

const deepMax = (arr: DeepArray) => Array.isArray(arr) ? Math.max(...arr.map(deepMax)) : arr

const deepMin = (arr: DeepArray) => Array.isArray(arr) ? Math.min(...arr.map(deepMin)) : arr

console.log(deepSum([1, [[2], 3], [4], 5, [6, 42, [[86], [[12]], 1337]], 1]))
console.log(deepDepth([1, [[2], 3], [4], 5, [6, 42, [[86], [[12]], 1337]], 1]))
console.log(deepMax([1, [[2], 3], [4], 5, [6, 42, [[86], [[12]], 1337]], 1]))
console.log(deepMin([1, [[2], 3], [4], 5, [6, 42, [[86], [[12]], 1337]], 1]))