import React, { useState, useEffect } from 'react'
import styles from './SellerItems.module.css'
import Logo from '../../../components/Logo/Logo'
import { useNavigate } from 'react-router-dom'
import OnOffNextButton from '../../../components/OnOffNextButton/OnOffNextButton'
import ReadOnlyBox from '../../../components/ReadOnlyBox/ReadOnlyBox'
import backendApis from '../../../utils/backendApis'

const SellerItems = () => {
  let navigate = useNavigate()
  const [isChecked, setIsChecked] = useState(false)
  const [inputs, setInputs] = useState({
    brand: '1',
    productCode: '2',
    color: '3',
    size: '4',
  })

  const getItems = async () => {
    const result = await backendApis.getItemInfo('GET')
    if (result?.status === 200) {
      setInputs({
        brand: result.ItemInfo.brand,
        productCode: result.ItemInfo.productCode,
        color: result.ItemInfo.color,
        size: result.ItemInfo.size,
      })
    } else {
      alert('정보를 불러오는 데 실패했습니다.')
    }
  }

  useEffect(() => {
    getItems
  }, [])

  const handleCheck = () => {
    setIsChecked(!isChecked)
  }
  return (
    <div>
      <Logo />
      <p className={styles.title}>
        정품 검수를 맡기실 제품이 맞는지 확인해주세요.
      </p>
      <ReadOnlyBox label='1. 브랜드' value={inputs.brand} />
      <ReadOnlyBox label='2. 제품코드' value={inputs.productCode} />
      <ReadOnlyBox label='3. 색상' value={inputs.color} />
      <ReadOnlyBox label='4. 사이즈' value={inputs.size} />
      <div>
        <input
          type='checkbox'
          id='myCheckBox'
          className={styles.myCheckBox}
          checked={isChecked}
          onChange={handleCheck}
        />
        <label className={styles.lableMid} htmlFor='myCheckBox'>
          {' '}
          거래하고자 하는 제품이 맞습니다.
        </label>
      </div>
      <OnOffNextButton
        onClick={() => {
          navigate('/seller/info')
        }}
        isChecked={isChecked}
      />
    </div>
  )
}

export default SellerItems
