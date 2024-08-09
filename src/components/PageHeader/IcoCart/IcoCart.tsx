import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import useCartContext from '../../../hooks/useCartContext.tsx'
import Count from '../../Count/Count.tsx'

interface IcoCartProps {}

export default function IcoCart({}: IcoCartProps) {
    const { shoppingCart } = useCartContext()
    
    const styles = {
        icon: {
            color: 'white',
            fontSize: '1.5rem',
        }
    }

	return (
        <Count num={shoppingCart.length}>
            <Link
                to='/carrinho'
                title='Carrinho'
            >
                <FontAwesomeIcon
                    icon={faCartShopping}
                    style={styles.icon}
                />
            </Link>
        </Count>
	)
}
