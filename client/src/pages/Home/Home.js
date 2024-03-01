import React, { useEffect, useState } from 'react'
import Logo from '../../components/Logo/Logo'
import ProgressStatus from '../../components/ProgressStatus/ProgressStatus'
import Guide from '../../components/Guide/Guide'
import Cta from '../../components/Cta/Cta'
import Modal from '../../components/Modal/Modal'
import BackendApis from '../../utils/backendApis'

const Home = () => {
  const [cta, setCta] = useState(0)
  const [transactionStatus, setTransactionStatus] = useState(null)

  const transactionSatusHandler = async () => {
    const result = await BackendApis.traceTransaction()
    console.log(result.transactionStatus)
    if (result?.status === 200) {
      setTransactionStatus(result.transactionStatus)
    }
  }

  useEffect(() => {
    transactionSatusHandler()
  }, [])
  return (
    <div>
      <Logo />
      <ProgressStatus transactionStatus={transactionStatus} />
      {cta === 0 ? null : <Modal cta={cta} setCta={setCta}></Modal>}
      <Guide />
      <Cta cta={cta} setCta={setCta} transactionStatus={transactionStatus} />
    </div>
  )
}

export default Home
