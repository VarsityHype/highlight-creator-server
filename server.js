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


const jwtCheck = jwt({
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

app.use(jwtCheck);

app.get("/api/external", jwtCheck, (req, res) => {
    res.send({
      msg: "Your Access Token was successfully validated!"
    });
  })


app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});


const uploadRouter = require('./routes/upload')
app.use('/upload', uploadRouter)

const videoRouter = require('./routes/video')
app.use('/video', videoRouter)

app.get('/', (req, res) => {
    res.json('/')
})

var request = require("request");

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT)
})
