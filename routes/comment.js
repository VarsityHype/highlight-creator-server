const express = require('express')
const router = express.Router()
const cors = require('cors')
const models = require('../models')

router.post('/add-comment', (req, res) => {

    let comment = models.comments.build({
        comment_body: req.body.comment_body,
        comment_time: req.body.comment_time ,
        comment_votes: 0,
        commenter_name: req.headers.user_display_name,
        commenter_id: req.headers.request_user_id
    })

    comment.save()

})

router.post('/delete-comment', (req, res) => {
    let comment = models.comments.findOne({where: {
        commenter_id: req.headers.request_user_id,
        id: req.body.comment_id
    }}).then(
        comment.destroy()
    )
})

router.post('/edit-comment', (req, res) => {
    let comment = models.comments.findOne({where: {
        commenter_id: req.headers.request_user_id,
        id: req.body.comment_id
    }}).then(
        comment.update({
            comment_body: req.body.comment_body
        })
    )
})


module.exports = router