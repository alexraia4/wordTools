const { dictionary } = require('./dictionary')

let counter = 1 

dictionary.forEach(element => {
  console.log(element, '', counter)
  counter++
});