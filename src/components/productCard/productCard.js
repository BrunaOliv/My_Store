import styles from './style.module.css'
import {produtoImg} from '../../../public/assets/casaco3.PNG'
import Image from 'next/image'

export function ProductCard(){
    return(
        <div className={styles.card}>
            <div className={styles.productImage}>
                <Image 
                    className={styles.image}
                    alt="produtoImage"
                    src="/assets/casaco3.PNG" 
                    width={200}
                    height={260}
                    priority
                />
            </div>

            <div className={styles.productInformation}>
                <div className={styles.productName}>Casaco Tricô</div>
                <p>R$ 129,90</p>
                <button className={styles.bayButton}>
                    Comprar
                </button>
            </div>
        </div>    
    )
}