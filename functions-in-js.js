function sayHello(){
    console.log("Hello How are you")
}

sayHello()

function formatGreeting(name){
    name=name.toUpperCase();
    greeting="Hello "+name;
    return greeting;
}


const formatedGreeting=formatGreeting("sufiyan")
console.log(formatedGreeting)

// Javascript considers functions as first class citizen

// function expressions 

const sayHi=function(name){
    return "Hi "+name;
};

console.log(sayHi("Tom"))


// IIFE -- Immediately Invoked Function Expression (IIFE)

// (function(){
//     console.log("Invoked Immediately");
// })();

// Default Parameters

function increment(number,by=1){
    console.log(number+by)
}

increment(10,1)
increment(12,1)
increment(13)
increment(15,5)