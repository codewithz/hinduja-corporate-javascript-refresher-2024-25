// In JS we have concept of truthy and falsy 

// false:  The boolean false value
// 0 
// -0
// 0n
// ""
// null
// undefined
// NaN

// Truthy Values

// true
// Any non zero number
// Non-empty Strings
// Arrays [even if empty]
// Object [even if blank]
// Functions [even if blank]


const x=null   // [],0,"","Zartab",{},null

if(x){
    console.log("Truthy")
}
else{
console.log("Falsy")
}

