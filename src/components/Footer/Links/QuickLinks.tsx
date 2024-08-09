import styles from './Links.module.css'

export default function QuickLinks() {
    return (
        <div className={styles.links}>
            <h3>Links Rápidos</h3>
            <nav>
                <ul>
                    <li><a>Recém-chegados</a></li>
                    <li><a>Minha Conta</a></li>
                    <li><a>Carrinho</a></li>
                    <li><a>Favoritos</a></li>
                    <li><a>Histórico</a></li>
                </ul>
            </nav>
        </div>
    )
}
