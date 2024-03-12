const fs = require('fs')
const path = require('path')
const { OpenAI } = require('openai')

const openai = new OpenAI()

class FileService {
  async processAndTranscribeFile(filePath) {
    try {
      // Whisper API를 통해 오디오 파일 변환
      const transcription = await openai.audio.transcriptions.create({
        file: fs.createReadStream(filePath),
        model: 'whisper-1',
      })

      // 변환된 텍스트를 .txt 파일로 저장
      const textFileName = `transcription-${Date.now()}.txt`
      const textFilePath = path.join(__dirname, '../uploads/', textFileName)
      fs.writeFileSync(textFilePath, transcription.data.text)

      // .txt 파일의 경로 반환
      return {
        success: true,
        message: '파일이 성공적으로 처리되었습니다.',
        downloadLink: `/uploads/${textFileName}`, // 사용자가 접근할 수 있는 경로
      }
    } catch (error) {
      console.error('파일 처리 중 오류 발생: ', error)
      return { success: false, error: '파일 처리 중 오류 발생' }
    }
  }
}

module.exports = new FileService()
