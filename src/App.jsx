import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router,Routes ,Outlet} from 'react-router-dom'
import Header from './components/header'
import Deases from './pages/deases'
import Home from './pages/home'
import Heart from './pages/heart'
import Foot from './components/foot'
function LayOut() {
  return (
    <>
     <Header  />
     <div className=' pt-16'></div>
     <Outlet/>
     <div className=' pt-20'></div>
     <Foot/>

    </>
     
  )
}




function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<LayOut/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/diseases' element={<Deases/>}/>
        <Route path='/heart' element={<Heart/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
