if (process.env.NODE_ENV !== "production") {
  //require('dotenv').load();
}

const models = require("../models");

const express = require("express"),
  router = express.Router();

(cors = require("cors")),
  router.use(cors()),
  (multer = require("multer")),
  (inMemoryStorage = multer.memoryStorage()),
  (uploadStrategy = multer({ storage: inMemoryStorage }).single("image")),
  (azureStorage = require("azure-storage")),
  (blobService = azureStorage.createBlobService()),
  (getStream = require("into-stream")),
  (containerName = "video-storagea");

const handleError = (err, res) => {
  res.status(500);
  res.render("error", { error: err });
};

//original function that doesn't trim spaces
// const getBlobName = originalname => {
//     const identifier = Math.random().toString().replace(/0\./, ''); // remove "0." from start of string
//     return `${identifier}-${originalname}`;
// };

//same function but trims spaces
const getBlobName = originalname => {
  const identifier = Math.random()
    .toString()
    .replace(/0\./, ""); // remove "0." from start of string

  const trimmedName = originalname.replace(/ /g, "-");
  return `${identifier}-${trimmedName}`;
};

router.post("/", uploadStrategy, (req, res) => {
  const blobName = getBlobName(req.file.originalname),
    stream = getStream(req.file.buffer),
    streamLength = req.file.buffer.length;
  blobService.createBlockBlobFromStream(
    containerName,
    blobName,
    stream,
    streamLength,
    err => {
      if (err) {
        handleError(err);
        console.log("error");
        return;
      } else {
        res.json({
          success: true,
          uploaded_url: `https://astorageserver.blob.core.windows.net/video-storagea/${blobName}`
        });
      }
    }
  );
});

router.post("/uploaded", (req, res) => {
  const azure_url = req.body.azure_url;
  const uploader_id = req.headers.request_user_id;

  let Video = models.Videos.build({
    azure_url: azure_url,
    uploader_id: uploader_id,
    title: req.body.title,
    description: req.body.description
  });

  Video.save();
});

module.exports = router;
