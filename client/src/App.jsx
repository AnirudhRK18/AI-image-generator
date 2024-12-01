import React, { useContext } from 'react'
import Home from './pages/Home'
import Credits from './pages/Credits'
import { Route, Routes } from 'react-router-dom'
import Result from './pages/Result'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { appcontext } from './context/Appcontext'
import {ToastContainer,toast} from 'react-toastify'

const App = () => {

  const {showlogin}=useContext(appcontext)
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-100'>
      <ToastContainer position='bottom-right'/>
      <Navbar/>
      {showlogin && <Login/>}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/result' element={<Result/>}/>
      <Route path='/buy' element={<Credits/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App