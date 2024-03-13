import React, { useState } from 'react'
import BackendApis from '../../utils/backendApis' // 실제 경로에 맞게 수정하세요
import styles from './Upload.module.css'

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [transcription, setTranscription] = useState('')
  const [uploading, setUploading] = useState(false) // 업로드 상태 관리

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
    setTranscription('') // 새 파일이 선택되면 이전의 transcription 초기화
  }

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('파일을 선택해주세요.')
      return
    }

    setUploading(true) // 업로드 시작

    try {
      const result = await BackendApis.uploadFile(selectedFile)
      if (result && result.status === 200) {
        setTranscription(result.text) // API 응답에서 반환된 텍스트를 상태에 저장
        // 업로드 완료 메시지는 상태 메시지를 통해 표시
      } else {
        alert('업로드 실패: ' + (result?.message || '서버 오류'))
      }
    } catch (error) {
      console.error('업로드 중 오류가 발생했습니다.', error)
      alert('업로드 중 오류가 발생했습니다.')
    }

    setUploading(false) // 업로드 상태 종료
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(transcription)
      .then(() => {
        alert('텍스트가 클립보드에 복사되었습니다')
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err)
      })
  }

  return (
    <div className={styles.uploadContainer}>
      <p className={styles.supportedFormats}>
        지원하는 파일 형식: mp3, mp4, mpeg, mpga, m4a, wav, webm
      </p>
      <input
        type='file'
        onChange={handleFileChange}
        accept='.mp3,.mp4,.mpeg,.mpga,.m4a,.wav,.webm'
        className={styles.fileInput}
      />
      <button onClick={handleUpload} className={styles.uploadButton}>
        업로드
      </button>
      <div className={styles.statusMessage}>
        {uploading && (
          <>
            <div className={styles.loadingAnimation}></div>
            <span>&nbsp;&nbsp;변환 중...</span>
          </>
        )}
        {!uploading && transcription && '변환 완료!'}
      </div>
      <textarea value={transcription} readOnly className={styles.textArea} />
      <button onClick={handleCopyToClipboard} className={styles.copyButton}>
        Copy Text
      </button>
    </div>
  )
}

export default Upload
