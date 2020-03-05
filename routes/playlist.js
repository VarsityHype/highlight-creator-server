const express = require('express')
const router = express.Router()
const cors = require('cors')
const models = require('../models')

/*
// http://localhost:3001/playlist/<clip ID>
router.get('/:id', (req, res) => {
    id = req.params.id
    models.clips.findOne({where: { id: id }})
    .then(clip => 
        res.json(clip)
        )
})
*/

router.post('/create-playlist', (req, res) => {

    let playlist = models.Playlists.build({
        title: req.body.newPlaylist.title,
        description: req.body.newPlaylist.description,
        owner_id: req.headers.request_user_id        
    })
    
    playlist.save()

})

router.post('/add-to-playlist', (req, res) => {
 let playlist = models.playlistrelation.build({
     playlist_reference_id: req.body.playlist_id,
     source_id: req.body.source_video_id,
     isClip: req.body.isClip
 })
})

router.get('/get-playlists', (req, res) => {
    models.Playlists.findAll({where: {owner_id: req.headers.request_user_id}})
    .then(playlists => res.json(playlists))
})


module.exports = router

