import Button from '../../../components/Button/Button.tsx'
import styles from './Banner.module.css'
import bg from './banner1.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.text}>
                <h3>Oferta da semana!</h3>
                <h2>Headphones  de última geração com preço baixíssimo!</h2>
                <p>Beats, Schurle, Sony, Edifier e outras marcas</p>

                <Button>Conferir</Button>
            </div>
            <div className={styles.desconto}>Até 40% de desconto!</div>
            <img src={bg} alt="" />
        </div>
    )
}
