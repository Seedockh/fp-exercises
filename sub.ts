const sub = <T>(arr: T[], ...args: T[]): T[] => 
    arr.filter((it: T): boolean => args.indexOf(it) === -1)

console.log(sub([5, 10, 15], 10, 20, 30))
