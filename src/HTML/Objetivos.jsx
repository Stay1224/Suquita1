import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header/Header'
import '../CSS/todas.css'
import '../CSS/Objetivos.css'

function Objetivos() {
  return (
    <>
      <body>
        <Header />
        
        <main>
          <section className="tudoobj">

          <section className='imagemobj'>


          </section>

          <section className="textoobj">
            <h1>Objetivos</h1>

            <hr />

            <p>Nosso objetivo com este projeto é fazer uma máquina de refrigerante com moedeira e uma tela de oled com informações sobre as bebidas que irá colocar no copo.</p>

            <p>Esses copos irão fica ao lado da máquina, quando o dinheiro inserido na máquina o devido copo será liberado com o microservo fazendo a abertura para o copo cair para colocar a bebida.</p>

            <p>Na tela terá informações como: bebida que o usuário deseja “Fanta” ou “Coca” e também tem a opção de 250ml ou 750ml de bebida. E no final a máquina vai fazer o som onde irá indicar que processo finalizado corretamente.</p>
          </section>
          </section>
        </main>

      </body>
    </>
  )
}

export default Objetivos