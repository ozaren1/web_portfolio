import Container from "../../components/Container"
import styles from './Contact.module.scss';
export default function Contact() {
    return(
        <>
            <Container>
                <div className={styles.contact}>
                    <div className={styles.communication}>
                        <div className={styles.description}>
                            <div><h1>Контакты</h1>
                            <span>Для связи со мной с целью сотрудничества и по другим вопросам вы можете воспользоваться любым удобным для вас способом связи. Буду рада вам!</span>
                            </div>
                            <div><a href="mailto:merkulova@gmail.com">merkulova@gmail.com</a>
                            <a href="tel:+79001111111">+79001111111</a></div>
                            
                        </div>
                        <div className={styles.links}>
                            <a href="">написать в whatsapp</a>
                            <a href="">написать в Instagram</a>
                            <a href="">написать в Telegram</a>
                            <a href="">написать в вконтакте</a>
                        </div>
                    </div>
                    <div className={styles.sources}>
                    <div className={styles.description}>
                            
                            <span>Также вы можете следить за моими работами и подробнее ознакомиться с ними в моих социальных сетях.</span>
                            
                            
                        </div>
                        <div className={styles.links}>
                            <a href="">группа в Telegram</a>
                            <a href="">группа в вконтакте</a>
                        </div>
                    </div>

                </div>
            </Container>
        </>
    )
 
}