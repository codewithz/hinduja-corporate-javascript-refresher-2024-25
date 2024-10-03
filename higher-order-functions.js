let numbers= [1,2,3,4,5,6,7,8,9]

const evenNumbers=[]

for( let index=0;index<numbers.length;index++){

    const number=numbers[index]

    if(number%2==0){
        evenNumbers.push(number)
    }
}

console.log("Original: ",numbers)
console.log("Even: ",evenNumbers)

// ------------ Higher Order Functions ------

// WHAT  --- Filter --- Array.filter

// HOW   --- Filter Even | Odd |Prime | %5


// Odd Number 

// WHAT -- Array.filter
// HOW -- By US 

 numbers= [1,2,3,4,5,6,7,8,9]
// const  numbers= [1,2,3,4,5,6,7,8,9]
function filterOdd(number){
    return number%2==1;
}

const oddNumbers= numbers.filter(filterOdd)

console.log("Original: ",numbers)
console.log("Odd Numbers: ",oddNumbers);






const evenNumbersWithArrow = numbers.filter( (number)=>number%2==0 )


console.log("Original: ",numbers)
console.log("Even Numbers =>: ",evenNumbersWithArrow);