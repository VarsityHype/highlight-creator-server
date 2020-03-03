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

router.post('/store_clip/', (req, res) => {

    let title = req.body.title
    let start = req.body.start_timestamp
    let end = req.body.end_timestamp
    let azure_url = req.body.azure_url
    console.log(title + ' ' + start + ' ' + end + ' ' + azure_url)
    console.log(req.body)

    let clip = models.Clips.build({
        start_timestamp: start,
        end_timestamp: end,
        title: req.body.clip_title,
        source_video_id: azure_url,
        creator_id: req.body.creator_id
    })
    clip.save().then(clip => res.json(clip))
})

module.exports = router