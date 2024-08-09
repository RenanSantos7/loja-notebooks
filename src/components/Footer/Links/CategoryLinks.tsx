import styles from './Links.module.css'
import { Link } from 'react-router-dom'

export default function CategoryLinks() {
    return (
        <div className={styles.links}>
            <h3>Categorias</h3>
            <nav>
                <ul>
                <li>
                    <Link to='/categorias'>Celulares</Link>
                </li>

                <li>
                    <Link to='/categorias'>Smartwatches</Link>
                </li>

                <li>
                    <Link to='/categorias'>Fones de ouvido</Link>
                </li>

                <li>
                    <Link to='/categorias'>Caixas de som</Link>
                </li>

                <li>
                    <Link to='/categorias'>Acessórios</Link>
                </li>
                </ul>
            </nav>
        </div>
    )
}
