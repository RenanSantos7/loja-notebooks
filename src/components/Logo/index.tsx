import { FaLaptopCode } from 'react-icons/fa';

import styles from './styles.module.css'

interface LogoProps {
	size?: number;
	color: string;
}

export default function Logo({ size = 64 , color }: LogoProps) {
	return (
		<div className={styles.container}>
			<FaLaptopCode size={size} color={color} />
			<div className={styles.logoText}>
				<div className={styles.textSecondary}>Casa do</div>
				<div className={styles.textPrimary}>Notebook</div>
			</div>
		</div>
	);
}

