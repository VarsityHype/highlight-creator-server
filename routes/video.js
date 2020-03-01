const express = require('express')
const router = express.Router()
const cors = require('cors')
const models = require('../models')


// http://localhost:3001/video/<VIDEO ID>
router.get('/:id', (req, res) => {
    let id = req.params.id
    models.Videos.findOne({ where: { id: id} })
    .then(
        video => {
        res.json(video)
        })
})

router.get('/my_videos', (req, res) => {

})


module.exports = router


