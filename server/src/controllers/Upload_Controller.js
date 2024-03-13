const multer = require('multer')
const path = require('path')
const FileService = require('../services/Upload_Service')

// 파일 업로드 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../uploads/')) // 파일 저장 경로
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) // 원본 파일명 유지
  },
})

const upload = multer({ storage: storage }).single('file')

// 파일 업로드 및 처리 로직
exports.uploadFile = (req, res) => {
  upload(req, res, async function (error) {
    if (error) {
      return res.status(400).json({ error: error.message })
    }
    try {
      const result = await FileService.processAndTranscribeFile(req.file.path)
      if (result.success) {
        return res.status(200).json({
          message: '파일이 성공적으로 처리되었습니다.',
          status: 200,
          text: result.text, // 변환된 텍스트를 응답에 포함
        })
      } else {
        return res.status(500).json({ error: result.error })
      }
    } catch (error) {
      console.error('파일 처리 중 오류 발생:', error)
      return res
        .status(500)
        .json({ error: '파일 처리 중 오류가 발생했습니다.' })
    }
  })
}
