const person={
    // key:value 
    name:"Zartab Nakhwa",
    age:33,
    blog:"www.codewithz.com",
    letsCode(){
        console.log("Start Coding")
    }

}

console.log(person)

// Ctrl + ~   -- How you start terminal in VSCOde

person.letsCode()

// -- Modify the Object 
// Using dot operator
person.degree="Masters in Information Technology"

console.log(person)

// Modify using []

person["favColor"]="Black"

console.log(person)

let key="city"
let value="Navi Mumbai"

person[key]=value

console.log(person)

key="techStack"
value=["SpringBoot","React","Node","Data Engineering","Devops","AI"]

person[key]=value


console.log("-------------------------------------------------")

console.log(person)

// Deleting keys from a JS object
delete person.favColor

console.log(person)

key="degree"

delete person[key]

console.log(person)