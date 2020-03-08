const express = require('express')
const router = express.Router()
const models = require('../models')

router.post('/finish-profile', (req, res) => {
    const profile = {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }

    let auth0id = 'abc'

    let user = models.users.findOne({where: { auth0id: auth0id }})
})

// http://localhost:3001/user/<USER_ID>/my_videos
// TODO change user ID from a param to the session variable.
router.get('/', (req, res) => {
    let id = req.headers.request_user_id
    models.Videos.findAll({ where: {uploader_id: id} })
    .then(
        videos => {
            res.json(videos)
        }
    )
})

// http://localhost:3001/user/<USER_ID>/my_clips
router.get('/:id/my_clips', (req, res) => {
    let id = req.params.id
    models.Clips.findAll({ where: {creator_id: id} })
    .then(
        videos => {
            res.json(videos)
        }
    )
})

// http://localhost:3001/user/<USER_ID>/my_playlists
router.get('/:id/my_playlists', (req, res) => {
    let id = req.params.id
    models.Clips.findAll({ where: {owner_id: id} })
    .then(
        videos => {
            res.json(videos)
        }
    )
})





module.exports = router


