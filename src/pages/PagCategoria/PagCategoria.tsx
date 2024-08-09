import styles from './PagCategoria.module.css'
import { useParams } from 'react-router-dom'
import BannerCategory from './BannerCategory/BannerCategory.tsx'
import { useContext, useEffect } from 'react'
import { DataContext } from '../../contexts/DataContext.tsx'
import Produto from '../../types/Produto.ts'
import CardContainer from '../../components/CardContainer/CardContainer.tsx'
import Card from '../../components/Card/Card.tsx'

interface IContexto {
    produtos: Produto[]
}

export default function PagCategoria() {

    const params = useParams()
    const category = params.categoria

    const { produtos }:IContexto = useContext(DataContext)
    
    const filteredProducts = produtos.filter(produto => (
        produto.categoria === category
    ))

    return (
        <div className='pageLimited'>
            <BannerCategory category={category} />
            <CardContainer>
                {!!filteredProducts.length
                    ? filteredProducts.map(product => (
                        <Card
                            key={product.id}
                            titulo={product.titulo}
                            img={product.img}
                            preco={product.preco}
                            idProduto={product.id}
                        />)
                        )
                    : <p>Não há produtos cadastrados nessa categoria</p>
                }
            </CardContainer>
        </div>
    )
}
