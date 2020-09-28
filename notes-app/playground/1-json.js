const fs = require('fs')
// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Hollyday"
// }

// const bookJSON = JSON.stringify(book)
// // fs.writeFileSync('1-json.json', bookJSON)
// const dataBuffer = fs.readFileSync('1-json.json').toString()
// //const dataJSON = dataBuffer.toString()
// //console.log(dataBuffer.toString());

// const data = JSON.parse(dataBuffer)
// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json').toString()
const user = JSON.parse(dataBuffer)

user.name = "jelena"
user.age = 45

const newUser = JSON.stringify(user)

fs.writeFileSync('1-json.json', newUser)