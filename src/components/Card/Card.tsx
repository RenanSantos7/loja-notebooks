import styles from './Card.module.css'
import Button from '../Button/Button.tsx'
import numToStr from '../../utils/converteMoeda.ts'
import useCartContext from '../../hooks/useCartContext.tsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

interface CardProps {
	idProduto: number
	titulo: string
	img: string
	preco: number
}

export default function Card({ idProduto, titulo, img, preco }: CardProps) {
	const { addToCart } = useCartContext()

	return (
		<article className={styles.card}>
			<Link to={`/produto/${idProduto}`}>
				<img src={img} alt='' />

				<div>
					<h3>{titulo}</h3>
					<p className={styles.precoContainer}>
						<span className={styles.cifrao}>R$</span>
						<span className={styles.preco}>
							{numToStr(preco)}
						</span>
					</p>
				</div>
			</Link>

			<Button handleClick={() => addToCart(idProduto)}>
				<FontAwesomeIcon icon={faCartPlus} />
				Adicionar ao carrinho
			</Button>

			<Button handleClick={() => addToCart(idProduto)}>
				<FontAwesomeIcon icon={faShoppingBag} />
				Comprar
			</Button>
		</article>
	)
}
