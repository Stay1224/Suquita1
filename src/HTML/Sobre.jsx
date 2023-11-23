import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header/Header'
import '../CSS/todas.css'
import '../CSS/Sobre.css'
import IMG from '../imgs/Henry.png'
import KAUA from '../imgs/Kaua.png'
import EDUARDO from '../imgs/eduardo.png'

function Sobre() {
  return (
    <>
      <body>
        <Header />

        <main className='sobren'>
          <h1>Quem somos?</h1>
          <hr />

          <section className='grupo'>
            <div className='int'>
              <div><img src={EDUARDO} alt="" /></div>
              <div>
                <h2>EDUARDO</h2>
                <p>Olá sou o Eduardo, e sou um dos desenvolvedores desse projeto de tcc</p>
              </div>
            </div>
            <div className='int'>
              <div><img src={KAUA} alt="" /></div>
              <div>
                <h2>KAUÃ</h2>
                <p>Olá sou o Kauâ, e sou um dos desenvolvedores desse projeto de tcc</p>
              </div>
            </div>
            <div className='int'>
              <div><img src={IMG} alt="" /></div>
              <div>
                <h2>LUIZ H.</h2>
                <p>Olá sou o Luiz, e sou um dos desenvolvedores desse projeto de tcc</p>
              </div>
            </div>
          </section>
        </main>
      </body>
    </>
  )
}

export default Sobre