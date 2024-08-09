import styles from './Categories.module.css'
import Categoria from './Categoria/Categoria.tsx'
import Titulo2 from '../../../components/Titulos/Titulo2.tsx'

export default function Categories() {

    const categories = ['celular', 'smartwatch', 'fone', 'som', 'acessorio']

    return (
        <section>
            <Titulo2>Categorias</Titulo2>
            <div className={styles.categoriesList}>
                {categories.map((category, i) =>
                    <Categoria
                        key={i}
                        content={category}
                    />)}
            </div>
        </section>
    )
}
