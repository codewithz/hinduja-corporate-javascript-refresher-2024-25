const name='Yash'

const city= "Mumbai"

console.log(name,"lives in",city)

const paragraph=`

Variable by definition is how you store values which can be changed later on.
 
When dealing with variables in JavaScript you must have heard about the keyword var which was used extensively (as it was the only way to declare a variable in JavaScript before ES6) and in latest versions we have got the option of let and const .`


console.log(paragraph)

const nameOfEmployee="Thomas"
const company="Asterix Solution"
const employeeCode="AX10012"

// Thomas works for Asterix Solution, his employee id is AX10012

const line=nameOfEmployee+" works for "+company+" , his employee id is "+employeeCode;
console.log(line)


const iLine= `${nameOfEmployee} works for ${company}, his employee id is ${employeeCode}`
console.log(iLine)