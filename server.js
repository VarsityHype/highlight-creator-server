const express = require('express')
const cors = require('cors')
const models = require('./models')
require('dotenv').config()
const PORT = 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// video route
const videoRouter = require('./routes/video')
app.use('/video', videoRouter)

const uploadRouter = require('./routes/upload')
app.use('/upload', uploadRouter)

app.get('/', (req, res) => {
    res.json('/')
})

app.post('/saveClip', (req, res) => {
    let clipsList = req.body.clipsList

    clipsList.forEach(clip => {
        console.log(clip.start, clip.end)
        models.Clips.create({
            start_timestamp: clip.start,
            end_timestamp: clip.end
        })
    })
})

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT)
})
