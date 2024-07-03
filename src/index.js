const express = require('express')
const usersRoutes = require('./routes/users')
const middlewareLogRequest = require('./middleware/log')
require('dotenv').config()


const app = express()

app.use(middlewareLogRequest)
app.use(express.json())

app.use('/users', usersRoutes)



app.listen(process.env.EXPRESS_PORT, () => {
    console.log("Server is running on port", process.env.EXPRESS_PORT)
})