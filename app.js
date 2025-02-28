// let monthsArr = ["Jan", 'Feb', "Mar", "Apr", "May", "June", "July","Aug","Sep","Oct","Nov","Dec"]
// let months = new Date().getMonth()
// let date = new Date().getDate()
// let year = new Date().getFullYear()

// let currentDate = date + "/" + monthsArr[months] + "/" + year
// document.writeln(currentDate)


let name = prompt("ENter your name")
let user = prompt("Enter your date of birth")
let currTime = new Date().getTime()
let dob = new Date(user).getTime()
let age = currTime - dob
let ages = age / (1000 * 60 * 60 * 24 * 365)
let currAge = Math.floor(ages)

document.writeln(`Hi, ${name}! Your age is ${currAge}`)