import { useState } from 'react'
import './App.css'
import { PopupAdd } from './components/PopupAdd'
import { Tabla } from "./components/Tabla";



function App() {
  const [popup, setPopup] = useState(false)
  const toggle = ()=>{
    setPopup(false)
  }

  return (
    <>
      <Tabla/>
      <button className='absolute bottom-5 right-5' onClick={()=>{setPopup(true)}}>
        Añadir
      </button>
      <PopupAdd show={popup} toggle={toggle}/>
    </>
  )
}

export default App
