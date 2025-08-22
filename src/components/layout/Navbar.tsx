import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <h1 className="gradient-text">
                        alter-ego
                    </h1>
                    <a href="/login" className='button'>
                        INICIAR SESION
                    </a>
                </div>
            </div>
        </nav>
    )
}