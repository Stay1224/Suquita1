import React from 'react'
import Header from '../Components/Header/Header'
import '../CSS/todas.css'
import '../CSS/Pecas.css'
import lcd from '../imgs/lcd.png'
import ultra from '../imgs/ultrasonico.png'
import bt from '../imgs/as.png'
import arduino from '../imgs/arduino.png'
import rele from '../imgs/rele.png'

function Pecas() {
  return (
    <>
      <body>
        <Header />

        <main className='pec'>
          <div className='up'>
            <h1>Peças</h1>
            <hr />
          </div>
          <section className="set1">
            <div className='pecimg1'>
              <div className='imgp1'><img src={rele} alt="" /></div>
              <div className='txt1'>
                <p>R$ 11,00</p>
                <hr />
              </div>
              <div></div>
            </div>
            <div className='pectxt'>
              <h2>Relé</h2>
              <p>O relé é um dispositivo elétrico destinado a realizar modificações súbitas, mas predeterminadas em um ou mais circuitos de saída. É importante compreender que para realizar esta ação, ele precisa alcançar uma condição especifica que varia de relé para relé.</p>
            </div>
          </section>
          <section className="set1">
            <div className='pectxt'>
              <h2>Arduíno</h2>
              <p>O Arduino é uma placa de prototipagem eletrônica que permite o desenvolvimento de projetos de automação residencial, como apagar as luzes automaticamente, regular a temperatura do ar-condicionado e muito mais. O melhor de tudo é que essa nova tecnologia é open source, ou seja, tem o código aberto, o que permite o acesso por qualquer pessoa.</p>
            </div>
            <div className='pecimg1'>

              <div className='txt1'>
                <p>R$ 87,50</p>
                <hr />
              </div>
              <div className='imgp1'><img src={arduino} alt="" /></div>
              <div></div>
            </div>

          </section>
          <section className="set1">
            <div className='pecimg1'>
              <div className='imgp1'><img src={lcd} alt="" /></div>
              <div className='txt1'>
                <p>R$ 37,90</p>
                <hr />
              </div>
            </div>
            <div className='pectxt'>
              <h2>LCD</h2>
              <p>Display é basicamente a tela do smartphone sem o vidro protetor e sem a parte da digitalização do touch. O display possui diversas tecnologias e terminologias próprias que precisam ser compreendidas tanto para se fazer uma escolha certa na hora de comprar um smartphone quanto para conhecer melhor os componentes dos seus aparelhos eletrônicos. Displays estão presentes também em monitores, tablets, notebooks, televisores e diversos outros dispositivos eletrônicos.</p>
            </div>
          </section>
          <section className="set1">
            <div className='pectxt'>
              <h2>Sensor Ultrassônico</h2>
              <p>Tudo o que precisa para que o moedeiro funcione é um bolso cheio trocos, uma alimentação de 12VDC e um lugar para o dinheiro cair depois de ser aceite.</p>
            </div>
            <div className='pecimg1'>

              <div className='txt1'>
                <p>R$ 25,80</p>
                <hr />
              </div>
              <div className='imgp1'><img src={ultra} alt="" /></div>
              <div></div>
            </div>

          </section>
          <section className="set1">
            <div className='pecimg1'>
              <div className='imgp1'><img src={bt} alt="" /></div>
              <div className='txt1'>
                <p>R$ 21,72</p>
                <hr />
              </div>
              <div></div>
            </div>
            <div className='pectxt'>
              <h2>Botão Pbs-29</h2>
              <p>Equipamento provido de dispositivo eletrônico com a finalidade de ler ou contar as cédulas ou notas que nele são introduzidas. Comumente utilizado em máquinas do tipo caça-níquel - prática de contravenção penal.</p>
            </div>
          </section>
        </main>
      </body>
    </>
  )
}

export default Pecas
