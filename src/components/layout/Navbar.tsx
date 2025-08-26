import styles from './Navbar.module.css';
import BuyButton from '../sections/BuyButton';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <h1 className="gradient-text">
                        alter-ego
                    </h1>
                    <BuyButton className='button'>
                        OBTENER CURSO
                    </BuyButton>
                </div>
            </div>
        </nav>
    )
}