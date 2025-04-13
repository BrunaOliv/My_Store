import styles from './styles.module.css'
import {FaShoppingBag, FaShoppingCart} from 'react-icons/fa'
import Link from 'next/link';

export function Header(){
    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                
                <Link href={'/'}>
                    <div className={styles.logo}>
                        <FaShoppingBag size={32} color='#fc8c06' />
                        <h1>Minha Loja Next</h1>
                    </div>
                </Link>

                <div className={styles.logo}>
                    <button className={styles.cart}>
                        <FaShoppingCart size={24} color='#fc8c06'/> 
                    </button>
                    <button className={styles.loginButton}>
                        Login
                    </button>
                    <Link href="/createProduct" className={styles.loginButton}>
                        Cadastrar Produto
                    </Link>
                </div>
            </nav>
            
        </header>
    )
}