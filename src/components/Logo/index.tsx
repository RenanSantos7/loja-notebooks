import { FaLaptopCode } from 'react-icons/fa';

import styles from './styles.module.css'
import { CSSProperties } from 'react';

interface LogoProps {
	size?: number;
	color: string;
	style?: CSSProperties;
}

export default function Logo({ size = 64 , color, style }: LogoProps) {
	return (
		<div className={styles.container} style={style}>
			<FaLaptopCode size={size} color={color} />
			<div className={styles.logoText}>
				<div className={styles.textSecondary}>Casa do</div>
				<div className={styles.textPrimary}>Notebook</div>
			</div>
		</div>
	);
}

