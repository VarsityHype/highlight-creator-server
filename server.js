const express = require('express')
const cors = require('cors')
const models = require('./models')
require('dotenv').config()
const PORT = 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


var jwt = require('express-jwt');
var jwks = require('jwks-rsa');


global.jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev-d7sbfn4b.auth0.com/.well-known/jwks.json'
    }),
    audience: '',
    issuer: 'https://dev-d7sbfn4b.auth0.com/',
    algorithms: ['RS256']
});



app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

const authRouter = require('./routes/auth')
app.use('/auth', jwtCheck, authRouter)

const uploadRouter = require('./routes/upload')
app.use('/upload', jwtCheck,  uploadRouter)

const videoRouter = require('./routes/video')
app.use('/video', jwtCheck, videoRouter)

app.get('/', (req, res) => {
    res.json('/')
})

app.post('/saveClip', (req, res) => {
    let sourceVideo = req.body.sourceVideo
    let clipsList = req.body.clipsList
    let creatorId = req.headers.request_user_id
    console.log(req.headers.request_user_id)
    clipsList.forEach(clip => {
        models.Clips.create({
            source_video_id: sourceVideo,
            title: clip.title,
            creator_id: creatorId,
            start_timestamp: clip.start,
            end_timestamp: clip.end
        })
    })
})

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT)
})
