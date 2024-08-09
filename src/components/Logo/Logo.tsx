import styles from './Logo.module.css'

interface LogoProps {
    color: string
    size?: number
}

export default function Logo({ color, size = 4 }: LogoProps) {
    
    const logoStyle = {
        color: color,
        fontSize: `${size}rem`
    }

    return (
        <h1
            className={styles.logo}
            style={logoStyle}
        >
            r
            <span className={styles.tech} style={{color: logoStyle.color}}>Tech</span>
        </h1>
    )
}
