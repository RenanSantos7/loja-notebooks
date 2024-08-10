import { useDataContext } from "../../contexts/DataContext";
import styles from "./styles.module.css";

export default function Loading() {
    const { loading } = useDataContext();

    if (loading) return (
        <div className={styles.backdrop}>
            <div className={styles.indicator} />
        </div>
    );
};