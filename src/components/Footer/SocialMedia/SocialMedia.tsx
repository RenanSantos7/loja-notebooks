import styles from './SocialMedia.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBluesky, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function SocialMedia() {
    return (
        <div className={styles.socialmedia}>
            <a
                href="https://facebook.com"
                target='_blank'
                rel='noopener'
                className={styles.link}
                title='Facebook'
            >
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            
            <a
                href="https://instagram.com"
                target='_blank'
                rel='noopener'
                className={styles.link}
                title='Instagram'
            >
                <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
                href="https://youtube.com"
                target='_blank'
                rel='noopener'
                className={styles.link}
                title='YouTube'
            >
                <FontAwesomeIcon icon={faYoutube} />
            </a>

            <a
                href="https://bsky.app/"
                target='_blank'
                rel='noopener'
                className={styles.link}
                title='BlueSky'
            >
                <FontAwesomeIcon icon={faBluesky} />
            </a>

        </div>
    )
}
