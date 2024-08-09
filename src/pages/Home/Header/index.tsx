import { FaBars, FaSearch } from "react-icons/fa";

import styles from './styles.module.css'
import Logo from "../../../components/Logo";

interface HeaderProps {
    
};

export default function Header(props: HeaderProps) {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <FaBars size={28} />
                    <Logo color="white" size={36} />
                </div>

                <div className={styles.center}>
                    <div className={styles.searchBar}>
                        <FaSearch />
                        <input
                            className={styles.input}
                        />
                    </div>
                </div>

                <div className={styles.rightSide}></div>
            </div>
        </div>
    );
};