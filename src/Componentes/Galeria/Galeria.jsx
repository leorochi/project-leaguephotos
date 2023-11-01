import React from 'react'
import Tags from '../Tags/Tags'
import styles from './galeria.module.scss'
import fotos from './fotos.json'
import Cards from './Cards/Cards'
import { useState } from 'react'



const Galeria = () => {

    const [itens, setItens] = useState(fotos);
    const tags = [...new Set(fotos.map(valor => valor.tag))]

    const filtraFotos = (tag) => {
        const novasFotos = fotos.filter(foto => foto.tag === tag);
        setItens(novasFotos);
    }

  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens}/>
        <Cards itens={itens} styles={styles}/>
    </section>
  )
}

export default Galeria