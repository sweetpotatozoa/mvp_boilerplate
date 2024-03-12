import React from 'react'

const Download = ({ link }) => {
  return (
    <div>
      <a href={link} download>
        다운로드
      </a>
    </div>
  )
}

export default Download
