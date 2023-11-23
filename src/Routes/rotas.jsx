import { Routes, Route } from 'react-router-dom'

import Objetivos from '../HTML/Objetivos'
import Pecas from '../HTML/Pecas'
import Videos from '../HTML/Videos'
import Sobre_nos from '../HTML/Sobre'

function Rotas() {
  return (
    <Routes>
        <Route path='/' element={<Objetivos />}/>
        <Route path='/pecas' element={<Pecas />}/>   
        <Route path='/videos' element={<Videos />}/>
        <Route path='/sobre' element={<Sobre_nos />}/> 
    </Routes>
  )
}

export default Rotas