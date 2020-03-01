const express = require('express')
const router = express.Router()
const cors = require('cors')
const models = require('../models')

router.post('/finish-profile', (req, res) => {
    const profile = {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }

    let auth0id = 'abc'

    let user = models.Users.findOne({where: { auth0id: auth0id }})
})


module.exports = router


