import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo.tsx'
import styles from './PageHeader.module.css'
import SearchBar from './SearchBar/SearchBar.tsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import IcoCart from './IcoCart/IcoCart.tsx'

export default function PageHeader() {
    return (
        <header className={styles.pageHeader}>
            <div className={`pageLimited ${styles.container}`}>
                <Link to='/'>
                    <Logo color='white' size={3} />
                </Link>
                
                <SearchBar />
                
                <div className={styles.actions}>
                    <Link
                        to='/'
                        title='Favoritos'
                    >
                        <FontAwesomeIcon
                            icon={faStar}
                            className={styles.icon}
                        />
                    </Link>
                    
                    <IcoCart />

                    <Link
                        to='/'
                        title='Conta'
                    >
                        <FontAwesomeIcon
                            icon={faCircleUser}
                            className={styles.icon}
                        />
                    </Link>
                </div>
            </div>
        </header>
    )
}
