import styles from './Footer.module.css'
import Logo from '../Logo/Logo.tsx'
import Newsletter from './Newsletter/Newsletter.tsx'
import SocialMedia from './SocialMedia/SocialMedia.tsx'
import QuickLinks from './Links/QuickLinks.tsx'
import CategoryLinks from './Links/CategoryLinks.tsx'
import About from './About/About.tsx'
import Cartoes from './Cartoes/Cartoes.tsx'

export default function PageFooter() {

    const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

	return (
		<footer className={styles.footer}>
			<div className='pageLimited'>
                <Logo
                    color={isDarkTheme
                        ? 'hsl(216, 64%, 78%)'
                        : 'hsl(216, 64%, 16%)'
                    }
                    size={2}
                />
				<div className={styles.container}>
					<div className={styles.social}>
                        <Newsletter />
                        
                        <SocialMedia />
                    </div>
                    
                    <QuickLinks />

                    <CategoryLinks />

                    <About />
				</div>
            </div>
            
            <hr />
            
            <div className={`pageLimited ${styles.container2}`}>
                <div className={styles.termos}>
                    Termos de Serviço

                    <span>|</span>

                    Política de Privacidade
                </div>

                <Cartoes />
            </div>
		</footer>
	)
}
