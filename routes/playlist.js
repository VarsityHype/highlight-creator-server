const express = require('express')
const router = express.Router()
const cors = require('cors')
const models = require('../models')

router.post('/create-playlist', (req, res) => {

    let playlist = models.Playlists.build({
        title: req.body.newPlaylist.title,
        description: req.body.newPlaylist.description,
        owner_id: req.headers.request_user_id        
    })

    playlist.save()
})

router.post('/add-to-playlist', (req, res) => {
    let playlist_clip = models.playlistrelations.build({
        playlist_reference_id: req.body.playlist_reference_id,
        source_id: req.body.source_id,
        isClip: req.body.isClip
    })

    playlist_clip.save()
})

router.get('/get-playlists', (req, res) => {
    let id = req.headers.request_user_id
    models.Playlists.findAll({where: {owner_id: id}})
    .then(playlists => res.json(playlists))
})


module.exports = router

