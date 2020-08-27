const create = <T>(...args: T[]): T[] => [...args]

console.log(create(1, 2, 42, 87, 2))