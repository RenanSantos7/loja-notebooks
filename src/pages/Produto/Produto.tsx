import styles from './Produto.module.css'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext.tsx'
import Produto from '../../types/Produto.ts'
import classNames from 'classnames'

interface Contexto {
    produtos: Produto[]
}

export default function PagProduto() {
    const params = useParams()

    const { produtos }:Contexto = useContext(DataContext)
    
    const produtoAtual = produtos.find(produto => produto.id === Number(params.id))

    return (
        <div className={classNames(
            'pageLimited',
            styles.product
        )}>
            <header className={styles.productHeader}>
                <div className={styles.imgContainer}>
                    <img src={produtoAtual.img} className={styles.foto} alt="" />
                </div>

                <div className={styles.info}>
                    <h2 className={styles.title}>{produtoAtual.titulo}</h2>
                    <p className={styles.descricao}>{produtoAtual.descricao}</p>
                    <p className={styles.preco}>{produtoAtual.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    <p className={styles.descricao}>em até 6x sem juros no cartão de crédito</p>
                </div>
            </header>
        </div>
    )
}
