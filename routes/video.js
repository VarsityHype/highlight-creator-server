const express = require('express')
const router = express.Router()
const cors = require('cors')
const models = require('../models')

/*
// http://localhost:3001/video/
router.get('/', (req, res) => {
    models.Videos.findAll()
    .then(videos => res.json(videos))
})
*/

// http://localhost:3001/video/<VIDEO ID>
router.get('/:id', (req, res) => {
    let id = req.params.id
    models.Videos.findOne({ where: { id: id} })
    .then(
        video => {
        res.json(video)
        })
})

// http://localhost:3001/videos/<USER_ID>/my_videos
router.get('/', (req, res) => {
    let id = req.headers.request_user_id
    models.Videos.findAll({ where: {uploader_id: id} })
    .then(
        videos => {
            res.json(videos)
        }
    )
})

module.exports = router


