import styles from './CardCarrinho.module.css'
import numToStr from '../../../utils/converteMoeda.ts'
import { useEffect } from 'react'

interface CardCarrinhoProps {
    titulo: string
    img: string
    preco: number
    qtd: number
}

export default function CardCarrinho({ titulo, img, preco, qtd }: CardCarrinhoProps) {

    return (
        <article className={styles.card}>
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
		</article>
    )
}