import {
    FaArrowRightFromBracket as FaLogout,
    FaBars,
    FaMagnifyingGlass as FaSearch,
    FaRegCircleUser
} from "react-icons/fa6";

import styles from './styles.module.css'
import Logo from "../../../../components/Logo";
import FlexLine from "../../../../components/FlexLine";
import { Link } from "react-router-dom";

export default function Header() {
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

                <div className={styles.rightSide}>
                    <FlexLine>
                        <Link to='/login'>Login</Link>
                        <FaRegCircleUser size={28} />
                    </FlexLine>
                    <FaLogout size={20} />
                </div>
            </div>
        </div>
    );
};