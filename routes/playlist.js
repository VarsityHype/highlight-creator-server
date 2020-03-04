const express = require('express')
const router = express.Router()
const cors = require('cors')
const models = require('../models')


// http://localhost:3001/playlist/<clip ID>
router.get('/:id', (req, res) => {
    id = req.params.id
    models.clips.findOne({where: { id: id }})
    .then(clip => 
        res.json(clip)
        )
})

router.post('/create-playlist', (req, res) => {
    let playlist = models.Playlists.build({
        title: title,
        description: description,
        owner_id: req.headers.request_user_id        
    })
    
    playlist.save().then(res => res.json(playlist))

})

router.post('/add-to-playlist', (req, res) => {

})


module.exports = router
