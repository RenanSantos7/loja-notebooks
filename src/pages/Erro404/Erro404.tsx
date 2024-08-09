import classNames from 'classnames'
import styles from './Erro404.module.css'
import img from './error404.svg'
import Button from '../../components/Button/Button.tsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Erro404() {
    return (
        <div className={classNames(
            'pageLimited',
            styles.erro404
        )}>
            <div>
                <h2>Não foi possível acessar essa página</h2>
                <h3>Tem certeza que digitou o endereço certo?</h3>

                <Button>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Voltar
                </Button>
            </div>
            <img src={img} alt="" />
        </div>
    )
}
