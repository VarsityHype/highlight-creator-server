const express = require('express')
const router = express.Router()
const cors = require('cors')
const models = require('../models')


// http://localhost:3001/clips/<clip ID>
router.get('/:id', (req, res) => {
    id = req.params.id
    models.clips.findOne({where: { id: id }})
    .then(clip => 
        res.json(clip)
        )
})


module.exports = router

