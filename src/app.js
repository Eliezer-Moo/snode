const express = require('express')
const mongoose = require('mongoose')


require('dotenv').config()
const app = express()

const attendances = require('./routes/attendance')
const port = process.env.PORT

//middleware
app.use(express.json())
app.use('/api', attendances)

//main route
app.get('/', (req, res) => {
        res.send('attendance app')
    })
    // connect to mongodb
mongoose.connect(process.env.DB_CONNECTION)
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.log(err))

app.listen(port, () => console.log(`app listening on port: ${port}!`))