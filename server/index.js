const { dictionary } = require('./dictionary')
const fs = require('fs')


const insert = "INSERT INTO Words (word)"
const values = "VALUES ('"
const end = "')"


fs.writeFileSync('./derp.txt', 'word')



// dictionary.map(word => {
//   try {
//     fs.writeFileSync('./derp.txt', word)
//   } catch (err) {
//     console.log(err)
//   }
// })