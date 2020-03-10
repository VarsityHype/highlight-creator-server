const express = require('express')
const router = express.Router()
const models = require('../models')

// store a clip
router.post('/store_clip/', (req, res) => {
    let sourceVideo = req.body.sourceVideo
    let clipsList = req.body.clipsList
    let creatorId = req.headers.request_user_id
    clipsList.forEach(clip => {
        models.Clips.create({
            source_video_id: `${sourceVideo}#t=${clip.start},${clip.end}`,
            title: clip.title,
            creator_id: creatorId,
            start_timestamp: clip.start,
            end_timestamp: clip.end
        })
    })
})

// view your clips
router.get('/view-clips/', (req, res) => {
    let creator_id = req.headers.request_user_id
    models.Clips.findAll({where: {creator_id: creator_id}})
    .then(clips => res.json(clips))
})

// delete a clip
router.post('/delete-clip', (req, res) => {
    let id = req.body.id
    models.Clips.destroy({where: {id: id}})
})

module.exports = router

