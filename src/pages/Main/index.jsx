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
            <>
                <MainCarousel slides={slides} />
            </>
            <Container>
                <div>обо мне</div>
                <div>цены</div>
            </Container>
        </>
    )
}
