import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import BuyerItems from './pages/Buyer/BuyerItems/BuyerItems'
import BuyerAddress from './pages/Buyer/BuyerAddress/BuyerAddress'
import BuyerGuide from './pages/Buyer/BuyerGuide/BuyerGuide'
import SellerGuide from './pages/Seller/SellerGuide/SellerGuide'
import SellerItems from './pages/Seller/SellerItems/SellerItems'
import SellerInfo from './pages/Seller/SellerInfo/SellerInfo'
import SellerCodeCheck from './pages/Seller/SellerCodeCheck/SellerCodeCheck'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/buyer/items' element={<BuyerItems />} />
          <Route exact path='/buyer/address' element={<BuyerAddress />} />
          <Route exact path='/buyer/guide' element={<BuyerGuide />} />
          <Route exact path='/seller/guide' element={<SellerGuide />} />
          <Route exact path='/seller/items' element={<SellerItems />} />
          <Route exact path='/seller/info' element={<SellerInfo />} />
          <Route exact path='/seller/codecheck' element={<SellerCodeCheck />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
