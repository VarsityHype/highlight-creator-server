const express = require('express')
const router = express.Router()
const cors = require('cors')
const models = require('../models')

router.get('/', (req, res) => {
    models.Videos.findAll()
    .then(videos => res.json(videos))
})
// http://localhost:3001/video/<VIDEO ID>
router.get('/:id', (req, res) => {
    let id = req.params.id
    models.Videos.findOne({ where: { id: id} })
    .then(
        video => {
        res.json(video)
        })
})

module.exports = router


