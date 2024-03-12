const express = require('express')
const Upload = require('../controllers/Upload_Controller')

const router = express.Router()

router.post('/file', Upload.uploadFile)

module.exports = router
