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