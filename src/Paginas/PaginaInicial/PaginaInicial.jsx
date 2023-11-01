import React from 'react'
import Cabecalho from '../../Componentes/Cabecalho/Cabecalho'
import Galeria from '../../Componentes/Galeria/Galeria'
import Menu from '../../Componentes/Menu/Menu'
import banner from './banner.png'
import styles from './paginainicial.module.scss'

const PaginaInicial = () => {
  return (
    <>
      <Cabecalho/>
      <main>
        <section className={styles.principal}>
          <Menu/>
          <div className={styles.principal__imagem}>
            <img src={banner} alt="Galera LOL" />
          </div>
        </section>
      </main>
      <div>
        <Galeria/>
      </div>
      
    </>
    
  )
}

export default PaginaInicial