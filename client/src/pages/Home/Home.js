import React, { useState } from 'react'
import Logo from '../../components/Logo/Logo'
import ProgressStatus from '../../components/ProgressStatus/ProgressStatus'
import Guide from '../../components/Guide/Guide'
import Cta from '../../components/Cta/Cta'
import Modal from '../../components/Modal/Modal'

const Home = () => {
  let [cta, setCta] = useState(0)
  let [transactionStatus, setTransactionStatus] = useState(null)
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
