import { useContext, useEffect } from 'react'
import CardContainer from '../../../components/CardContainer/CardContainer.tsx'
import { DataContext } from '../../../contexts/DataContext.tsx'
import Produto from '../../../types/Produto.ts'
import Card from '../../../components/Card/Card.tsx'
import Titulo2 from '../../../components/Titulos/Titulo2.tsx'

interface IContexto {
	produtos: Produto[]
}

export default function SecProdutos() {
	const { produtos }: IContexto = useContext(DataContext)
    const produtosLtd = produtos
        .filter(produto => produto.recomendado)
        .sort((a,b) => (
            a.dataAdd < b.dataAdd ? 1 : a.dataAdd > b.dataAdd ? -1 : 0
        ))

    /* useEffect(() => {
        console.log(produtosLtd); 
    }, [produtos]) */

	return (
		<section>
			<Titulo2>Produtos Recomendados</Titulo2>
            <CardContainer>
                {!!produtosLtd.length
                    ? produtosLtd.map(produto => (
                        <Card
                            key={produto.id}
                            idProduto={produto.id}
                            titulo={produto.titulo}
                            img={produto.img}
                            preco={produto.preco}
                        />
                    ))
                    : <p>Não há produtos ainda</p>
                }
            </CardContainer>
		</section>
	)
}
