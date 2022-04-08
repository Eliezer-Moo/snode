const express = require('express')
const joi = require('@hapi/joi')

require('dotenv').config()
const app = express()

const port = process.env.PORT

app.listen(port, () => console.log(`app listening on port: ${port}!`))

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log('Hello World!')
})
