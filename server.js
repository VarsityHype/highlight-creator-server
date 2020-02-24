const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const PORT = 3000
global.bcrypt = require('bcrypt')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.json('/')
})

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT)
})
