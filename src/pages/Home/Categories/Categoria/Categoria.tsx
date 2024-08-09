import { Link } from 'react-router-dom'
import styles from './Categoria.module.css'
import celular from '../../../../assets/celular.png'
import relogio from '../../../../assets/relogio.png'
import fone from '../../../../assets/fone.png'
import caixa from '../../../../assets/caixa-de-som.png'
import cabo from '../../../../assets/cabo.png'

interface CategoriaProps {
	content: string
}

export default function Categoria({ content }: CategoriaProps) {
    let contentTxt = ''
    let contentImg = ''

	switch (content) {
        case 'celular':
            contentImg = celular
			contentTxt = 'Celulares'
			break
        case 'smartwatch':
            contentImg = relogio
			contentTxt = 'Smartwatches'
			break
        case 'fone':
            contentImg = fone
			contentTxt = 'Fones de ouvido'
			break
        case 'som':
            contentImg = caixa
			contentTxt = 'Caixas de Som'
			break
        case 'acessorio':
            contentImg = cabo
			contentTxt = 'Acessórios'
			break
	}

	return (
		<article className={styles.categoria}>
            <Link to={`/categoria/${content}`}>
                <img src={contentImg} alt="" />
                <span>{contentTxt}</span>
            </Link>
		</article>
	)
}
