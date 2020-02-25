const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const models = require('./models')
const PORT = 3000
const app = express()
global.bcrypt = require('bcrypt')

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.json('/')
})

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT)
})
