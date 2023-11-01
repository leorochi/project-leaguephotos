import React from 'react'
import favorito from './favorito.png'
import open from './open.png'

const Cards = ({itens, styles}) => {
  return (
    <ul className={styles.galeria__cards}>
        {itens.map(itens => {
        return(
            <li key={itens.id} className={styles.galeria__card}>
                <img src={itens.imagem} alt={itens.titulo} className={styles.galeria__imagem} />
                <p className={styles.galeria__descricao}>{itens['titulo:']}</p>
                <div>
                    <span>
                        <img src={favorito} alt="favorito" />
                        <img src={open} alt="open" />
                    </span>
                </div>
            </li>
        )
    })}
    </ul>
    
  )
}

export default Cards