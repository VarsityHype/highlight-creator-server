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

// store a clip
router.post('/store_clip/', (req, res) => {
    let sourceVideo = req.body.sourceVideo
    let clipsList = req.body.clipsList
    let creatorId = req.headers.request_user_id
    console.log(req.headers.request_user_id)
    clipsList.forEach(clip => {
        models.Clips.create({
            source_video_id: sourceVideo,
            title: clip.title,
            creator_id: creatorId,
            start_timestamp: clip.start,
            end_timestamp: clip.end
        })
    })
})


module.exports = router

