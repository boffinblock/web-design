
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllComponents from './Components/AllComponents'


function App() {

  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Routes>
          <Route path='/' element={<AllComponents />} />
        </Routes>
      </BrowserRouter >

    </>
  )
}

export default App
