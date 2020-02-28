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

    if (process.env.NODE_ENV !== 'production') {
        //require('dotenv').load();
    }
    
    const
          express = require('express')
        , router = express.Router()
    
        , multer = require('multer')
        , inMemoryStorage = multer.memoryStorage()
        , uploadStrategy = multer({ storage: inMemoryStorage }).single('image')
    
        , azureStorage = require('azure-storage')
        , blobService = azureStorage.createBlobService()
    
        , getStream = require('into-stream')
        , containerName = 'video-storagea'
    ;
    
    const handleError = (err, res) => {
        res.status(500);
        res.render('error', { error: err });
    };
    
    const getBlobName = originalName => {
        const identifier = Math.random().toString().replace(/0\./, ''); // remove "0." from start of string
        return `${identifier}-${originalName}`;
    };

    router.get('/:videoId', )
    
    router.post('/', uploadStrategy, (req, res) => {
    
        const
              blobName = getBlobName(req.file.originalname)
            , stream = getStream(req.file.buffer)
            , streamLength = req.file.buffer.length
        ;
    
        blobService.createBlockBlobFromStream(containerName, blobName, stream, streamLength, err => {
    
            if(err) {
                handleError(err);
                return;
            }
    
            res.json({
                success: true,
                uploaded_url: `https://astorageserver.blob.core.windows.net/video-storagea/${blobName}`,
            })
            
        });
    });

})

module.exports = router
