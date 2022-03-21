const { dictionary } = require('./dictionary')
const fs = require('fs')

let stream = fs.createWriteStream('server/seed.sql')
stream.on('error', console.error)

stream.write('DROP TABLE words;\n\nCREATE TABLE words (\n id serial PRIMARY KEY,\n word VARCHAR(200) UNIQUE NOT NULL\n);\n\n')

dictionary.map(word => {
  stream.write(`INSERT INTO words(word)\nVALUES ('${word}');\n\n`)
})