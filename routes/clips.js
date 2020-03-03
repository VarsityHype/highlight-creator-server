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
    let start = req.body.start
    let end = req.body.end
    let azure_url = req.body.azure_url
    console.log(title + ' ' + start + ' ' + end + ' ' + azure_url)

    let clip = models.Clips.build({
        title: title,
        start_timestamp: start,
        end_timestamp: end,
        source_video_id: azure_url,
        creator_id: '1'
    })
    clip.save().then(clip => res.json(clip))
})

module.exports = router