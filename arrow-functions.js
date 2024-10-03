// Arrow FUnctions are  like first class citizens

// They can be assigned to a variable
// They can be passed as an argument 

function sayHello(){
    console.log("Hello JS")
}

// Arrows 

// -> Arrow
//  => Fat Arrow 


// function sayHello(){
//     console.log("Hello JS")
// }

 const f1= ()=>{
    console.log("Hello JS")
}

f1()

function squareNumber(number){
    return number*number;
}

const f2= (number)=>{
    return number*number;
}

console.log("Square of 3 is ",f2(3))

// if your arrow function have a single parameter, () can be skipped

// 0 parameter -- () mandatory 
// 1 parameter -- () optional 
// more than one parameter -- ()  mandatory


const f3= number=>{
    return number*number;
}

console.log("Square of 4 is ",f3(4))

// if your function contains a single statement 

//we can get rid of {} and return keyword 
// {} and return keyword are either present together or absent altogether

// statements 
// return number*number --> number*number --> value will be returned
// console.log("Hello") --> clg("Hello") --> it will just execute 


// function squareNumber(number){
//     return number*number;
// }

const f4= number=>number*number
console.log("Square of 5 is ",f4(5))


function addMe(a,b,c){
    return a+b+c;
}

const add2=(a,b,c)=>a+b+c;


console.log(add2(5,10,15));

function calculation(x,y,z){
    const a=x+3;
    const b=y+5;
    const c=z-b;

    return a+b+c;
}

 const x=(x,y,z)=>{
    const a=x+3;
    const b=y+5;
    const c=z-b;

    return a+b+c;
}


console.log(x(1,2,3))

