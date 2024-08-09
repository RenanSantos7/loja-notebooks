import styles from './BannerCategory.module.css'
import celular from '../../../assets/celular.png'
import relogio from '../../../assets/relogio.png'
import fone from '../../../assets/fone.png'
import caixa from '../../../assets/caixa-de-som.png'
import cabo from '../../../assets/cabo.png'
import Titulo1 from '../../../components/Titulos/Titulo1.tsx'

interface CategoryProps {
    category: string
}

export default function BannerCategory({ category }: CategoryProps) {
    
    let img = ''
    let text = ''

    switch (category) {
        case 'celular':
            img = celular
            text = 'celulares'
			break
        case 'smartwatch':
            img = relogio
            text = 'smartwatches'
			break
        case 'fone':
            img = fone
            text = 'fones de ouvido'
			break
        case 'som':
            text = 'caixas de som'
            img = caixa
			break
        case 'acessorio':
            text = 'acessórios'
            img = cabo
			break
    }

    return (
        <section className={styles.banner}>
            <img src={img} alt="" className={styles.image} />
            <Titulo1>{text}</Titulo1>
        </section>
    )
}
