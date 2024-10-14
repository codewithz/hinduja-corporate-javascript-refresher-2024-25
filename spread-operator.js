// Denoted by ...

// Array [...]
// Object {...}

// To spread the elements or keys from one array/object to another

const first=[1,2,3]
const second=[4,5,6]

// 1,2,3,a,b,c,4,5,6

const combined=first.concat(["a","b","c"]).concat(second)
console.log("First:",first)
console.log("Second:",second)
console.log("Combined:",combined)


// 1,2,3,a,4,5,6,b

const combined1=first.concat("a").concat(second).concat("b")
const combined_with_spread=[...first,"a",...second,"b"]
console.log("Combined with Spread:",combined_with_spread)

console.log("-------- CLONING-----------")

const cloneFirst=[...first]
console.log(cloneFirst)

console.log("----------------------------------")

// const grades=["C","A","B","D"]
// console.log("Original :",grades)
// const sorted=grades.sort()
// console.log("Sorted:",sorted)
// console.log("Original :",grades)

const grades=["C","A","B","D"]
console.log("Original :",grades)
const sorted=[...grades].sort()
console.log("Sorted:",sorted)
console.log("Original :",grades)