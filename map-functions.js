const numbers=[1,2,3,4,5,6]

// Higher Order Function 
// WHAT -- map -- Array.map
// How -- doubleNumber 

function doubleNumber(number){
    return number*2
}

const doubleNumbers=numbers.map(doubleNumber)

console.log("Original:",numbers)
console.log("Double Numbers:",doubleNumbers)

//  (number) => number*2

const doubleNumbersWithArrow=numbers.map( (number)=> number*2)

console.log("Double Numbers With Arrow:",doubleNumbersWithArrow)

// ------------------------------------------------------------------
console.log("-------------Map Function in Action-------------------")
// ------------------------------------------------------------------

const users=[
                {id:1,name:'Tom',dept:'IT'},
                {id:2,name:'Alex',dept:'Finance'},
                {id:3,name:'Mike',dept:'HR'},
                {id:4,name:'John',dept:'IT'},
                {id:5,name:'Elizabeth',dept:'Admin'},
            ]

        // <div>
        //     <h1>Name</h1>
        //     <h2>Dept</h2>
        //     <p>ID</p>
        // </div>


function transformToComponent(user){
            const component=`<div>
                                    <h1>${user.name}</h1>
                                    <h2>${user.dept}</h2>
                                    <p>${user.id}</p>
                            </div>`

            return component
        }

const transformedUsers=users.map(transformToComponent)

console.log("Users:",users)
console.log("\n\n\n")
console.log("Components:",transformedUsers)