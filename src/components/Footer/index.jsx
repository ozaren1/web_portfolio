import styles from './Footer.module.scss'
import Container from '../Container'
export default function Footer() {
    return(
        <footer className={styles.footer}>
            <Container>
                <div className={styles.wrapper}>
                    <a href=""><img src="/assets/image/icon/whatsapp.svg" alt="Whatsapp-logo" /></a>
                    <a href=""><img src="/assets/image/icon/VK_Logo.svg" alt="VK-logo" /></a>
                    <a href=""><img src="/assets/image/icon/Telegram-logo.svg" alt="Telegram-logo" /></a>
                    <a href=""><img src="/assets/image/icon/instagram.svg" alt="Instagram-logo" /></a>
                </div>
                <div></div>
                <div className='site-by'>Site by </div>
            
            </Container>
        </footer>
    )
    
}