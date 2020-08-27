const add = <T>(arr: T[], ...args: T[]): T[] => [...arr, ...args]

console.log(add(['oui','hier','non'], 'no', 'today', 'yes', 'sure'))