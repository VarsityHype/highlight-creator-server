//598430

const express = require('express')
const router = express.Router()
const cors = require('cors')
const models = require('../models')
const IncomingForm = require('formidable').IncomingForm

router.use(express.urlencoded({extended: false}))
router.use(express.json())
router.use(cors())

//**************************************** UPLOAD ****************************************//

router.post('/upload', (req, res) => {

    let video = models.Videos.build({
        title: req.body.title,
        description: req.body.description,
       // azure_url: req.body.azure_url,
        uploader_id: req.body.uploader_id
    })
    let savedVideo = video.save()
    if (savedVideo !== null) {
        res.send('Video saved!')
    }

})

module.exports = router
