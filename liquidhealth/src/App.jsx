
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllComponents from './Components/AllComponents'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


function App() {

  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true }}>
      <ToastContainer />
        <Routes>
          <Route path='/' element={<AllComponents />} />
        </Routes>
      </BrowserRouter >

    </>
  )
}

export default App
