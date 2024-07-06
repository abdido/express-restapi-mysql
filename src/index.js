const express = require('express')
const usersRoutes = require('./routes/users')
const middlewareLogRequest = require('./middleware/log')
const upload = require('./middleware/multer')
require('dotenv').config()


const app = express()

app.use(middlewareLogRequest)
app.use(express.json())
app.use(express.static('public'))

app.use('/users', usersRoutes)
app.use('/upload', upload.single('foto'), (req, res) => {
    res.json({
        message: 'Upload Success'
    })
})

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})



app.listen(process.env.EXPRESS_PORT, () => {
    console.log("Server is running on port", process.env.EXPRESS_PORT)
})