if (process.env.NODE_ENV !== 'production') {
    //require('dotenv').load();
}

const models = require('../models')

const
    express = require('express')
    , router = express.Router()

    cors = require('cors')
    , router.use(cors())

    , multer = require('multer')
    , inMemoryStorage = multer.memoryStorage()
    , uploadStrategy = multer({ storage: inMemoryStorage }).single('image')

    , azureStorage = require('azure-storage')
    , blobService = azureStorage.createBlobService()

    , getStream = require('into-stream')
    , containerName = 'video-storagea'
;

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

router.use(jwtCheck);

const handleError = (err, res) => {
    res.status(500);
    res.render('error', { error: err });
};

const getBlobName = originalname => {
    const identifier = Math.random().toString().replace(/0\./, ''); // remove "0." from start of string
    return `${identifier}-${originalname}`;
};


    console.log("file uploaded")
router.post('/', uploadStrategy, (req, res) => {
    console.log(req.file.originalname)
  
    const
        blobName = getBlobName(req.file.originalname)
        , stream = getStream(req.file.buffer)
        , streamLength = req.file.buffer.length
    ;

    blobService.createBlockBlobFromStream(containerName, blobName, stream, streamLength, err => {

        if(err) {
            handleError(err)
            console.log("error");
            return;
        } else {


        res.json({
            success: true,
            uploaded_url: `https://astorageserver.blob.core.windows.net/video-storagea/${blobName}`,
        })
    }
    });
});

router.post('/uploaded', jwtCheck, (req,res) => {
    const azure_url = req.body.azure_url
    const uploader_id = req.body.uploader_id

    let Video = models.Videos.build({
        azure_url: azure_url,
        uploader_id: uploader_id,
        title: 'hi',
        description:'hello,description!'
    })

    Video.save().then((persistedVideo) => {
        console.log("persistedVideo")
    })

})


module.exports = router;