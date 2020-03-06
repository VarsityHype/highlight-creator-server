const express = require('express')
const router = express.Router()
const models = require('../models')

// create a playlist
router.post('/create-playlist', (req, res) => {
    let playlist = models.Playlists.build({
        title: req.body.newPlaylist.title,
        description: req.body.newPlaylist.description,
        owner_id: req.headers.request_user_id        
    })

    playlist.save()
})

// add a video to a playlist
router.post('/add-to-playlist', (req, res) => {
    let playlist_clip = models.playlistrelations.build({
        playlist_reference_id: req.body.playlist_reference_id,
        source_id: req.body.source_id,
        isClip: req.body.isClip
    })

    playlist_clip.save()
})

// load videos that belong to a playlist
router.get('/get-playlist-videos/:playlistId', (req, res) => {
    let playlistId = req.params.playlistId
    models.playlistrelations.findAll({where: {playlist_reference_id: playlistId}})
    .then(playlist_videos => res.json(playlist_videos))
})

// remove a video from a playlist
router.post('/remove-from-playlist', (req, res) => {
    let source_id = req.body.source_id
    models.playlistrelations.destroy({where: {source_id: source_id}})
})

// load playlists that belong to user
router.get('/get-playlists', (req, res) => {
    let id = req.headers.request_user_id
    models.Playlists.findAll({where: {owner_id: id}})
    .then(playlists => res.json(playlists))
})

// delete a playlist
router.post('/delete-playlist', (req, res) => {
    let id = req.body.id
    models.Playlists.destroy({where: {id: id}})
})

module.exports = router

