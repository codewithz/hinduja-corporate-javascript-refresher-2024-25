const address={
    city:'Mumbai',
    state:'MH',
    pincode:400001,
    country:"India"
}

// Traditional Way 

// const city=address.city
// const pincode=address.pincode
// const country=address.country
// const state=address.state

// ES6 -- Object Destructuring 
const state="Maharashtra"
const {city,pincode,state:st}=address

console.log("City:",city)
console.log("Pincode:",pincode)
console.log("State:",state)
console.log("St:",st)


console.log("-------------- DESCTRUCTURING AND FUNCTIONS--------------------")

function displayAddress(address){
    console.log("-----------1----------------")
    console.log(address.city)
    console.log(address.state)
    console.log(address.pincode)
    console.log(address.country)

}

displayAddress(address)

// const {city,pincode,state,country}=address

function displayAddressNewWay({city,pincode,state,country}){
    console.log("-----------2----------------")
    console.log(city)
    console.log(state)
    console.log(pincode)
    console.log(country)
}

displayAddressNewWay(address)