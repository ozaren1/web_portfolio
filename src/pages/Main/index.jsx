import styles from './Main.module.scss';
import Container from '../../components/Container';
import MainCarousel from '../../components/MainCarousel';
export default function MainPage () {
    const slides = [
        '/assets/image/sdsd.jpg',
        '/assets/image/1.jpg',
        '/assets/image/m.jpg'
      ];
    return (
        <>
            <MainCarousel slides={slides} />
        
            <div className={styles.about_me}>
                <Container>
                    <div className={styles.wrapper}>
                        <div className={styles.left}>
                            <h2>Обо мне</h2>
                            <span className={styles.description}>
                                Привет! Меня зовут [Ваше имя], я фотограф, который обожает запечатлевать самые важные моменты жизни.
                                Моя специализация — свадебная и репортажная фотография, а также индивидуальные и семейные съемки. Для меня каждая фотография — это не просто кадр, это эмоции, история и уникальное настроение.
                                Я работаю в Екатеринбурге и по всему миру, создавая фотографии, которые остаются на память на всю жизнь. Мой стиль — это естественность, живые эмоции и внимание к деталям. Я стремлюсь поймать каждый важный момент, сохранив его так, как он был в реальности — искренним и неповторимым.
                            </span>
                        </div>
                        <div className={styles.right}>
                            <img src="/assets/image/phot.jpg" alt="" />
                        </div>
                    </div>
                </Container>
            </div>
            <div className='price'>
                <Container>
                    <div className='wrapper'>
                        <h2>Цены</h2>
                    </div>
                </Container>
            </div>
            
        </>
    )
}
