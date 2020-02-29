const express = require('express')
const cors = require('cors')
const models = require('./models')
require('dotenv').config()
const PORT = 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const uploadRouter = require('./routes/upload')
app.use('/upload', uploadRouter)

app.get('/', (req, res) => {
    res.json('/')
})

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT)
})
