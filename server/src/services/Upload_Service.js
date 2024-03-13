const fs = require('fs')
const path = require('path')
const { OpenAI } = require('openai')

const openai = new OpenAI(process.env.OPENAI_API_KEY)

class FileService {
  async processAndTranscribeFile(filePath) {
    try {
      const transcription = await openai.audio.transcriptions.create({
        file: fs.createReadStream(filePath),
        model: 'whisper-1',
      })
      return {
        success: true,
        text: transcription.text, // 여기에서 변환된 텍스트를 직접 반환
      }
    } catch (error) {
      console.error('파일 처리 중 오류 발생: ', error)
      return { success: false, error: '파일 처리 중 오류 발생' }
    }
  }
}

module.exports = new FileService()
