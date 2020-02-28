const express = require('express')
const router = express.Router()
const cors = require('cors')
const models = require('../models')

router.post('/finish-profile', (req, res) => {
    const profile = {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }

    models.Users.findOne({where: { auth0id: 'abc' }})
})


module.exports = router


