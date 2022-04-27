const express = require('express')
const app = express()

const { port } = require('./config')

const attendanceRouter = require('./src/routes/attendance')
const membersRouter = require('./src/routes/members')
const usersRouter = require('./src/routes/users')
const validateAuth = require("./src/middlewares/validateAuth")

app.use(validateAuth)

app.use(express.json())

app.use('/attendance', attendanceRouter)
app.use('/members', membersRouter)
app.use('/users', usersRouter)

app.listen(port, () => console.log(`app listening on port: ${port}!`))

