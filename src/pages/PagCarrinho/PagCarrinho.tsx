import styles from './PagCarrinho.module.css'
import CardContainer from '../../components/CardContainer/CardContainer.tsx'
import Titulo1 from '../../components/Titulos/Titulo1.tsx'
import useCartContext from '../../hooks/useCartContext.tsx'
import { useEffect } from 'react'
import useDataContext from '../../hooks/useDataContext.tsx'
import Produto from '../../types/Produto.ts'
import CartItem from '../../types/CartItem.ts'
import CardCarrinho from './components/CardCarrinho.tsx'

interface ProdutoNoCarrinho extends CartItem {
	img: string
	titulo: string
	preco: number
}

export default function PagCarrinho() {
	const { shoppingCart } = useCartContext()
	const { produtos } = useDataContext()

	const carrinho = [new CartItem(0, 1), new CartItem(2, 1)]

	const produtosNoCarrinho: ProdutoNoCarrinho[] = carrinho
		.map(itemCarrinho => {
			const produto = produtos.find(
				produto => produto.id === itemCarrinho.id,
			)
			if (produto) {
				const { img, titulo, preco } = produto
				return { ...itemCarrinho, img, titulo, preco }
			}
			return null
		})
        .filter((item): item is ProdutoNoCarrinho => item !== null)
    
    useEffect(() => {
        console.log(produtosNoCarrinho)
    },[produtosNoCarrinho])

	return (
		<div className='pageLimited'>
			<div className={styles.banner}>
				<Titulo1>Carrinho</Titulo1>
			</div>
            <CardContainer>
                {produtosNoCarrinho.map(
                    produto => (
                        <CardCarrinho
                            key={produto.id}
                            img={produto.img}
                            preco={produto.preco}
                            titulo={produto.titulo}
                            qtd={produto.quantidade}
                        />
                    )
                )}
            </CardContainer>
		</div>
	)
}
