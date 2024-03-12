import React, { useState } from 'react'
import BackendApis from '../../utils/backendApis'
import styles from './Upload.module.css'

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('파일을 선택해주세요.')
      return
    }

    // 파일 업로드 로직
    try {
      const result = await BackendApis.uploadFile(selectedFile)
      if (result && result.status === 200) {
        alert('파일이 업로드되었습니다.')
      } else {
        alert('업로드 실패: ' + (result?.message || '서버 오류'))
      }
    } catch (error) {
      console.error('업로드 중 오류가 발생했습니다.', error)
      alert('업로드 중 오류가 발생했습니다.')
    }
  }

  return (
    <div className={styles.uploadContainer}>
      <p>지원하는 파일 형식: mp3, mp4, mpeg, mpga, m4a, wav, webm</p>
      <input
        type='file'
        onChange={handleFileChange}
        accept='.mp3,.mp4,.mpeg,.mpga,.m4a,.wav,.webm'
      />
      <button onClick={handleUpload}>업로드</button>
    </div>
  )
}

export default Upload
