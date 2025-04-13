import styles from '../styles/Home.module.css'
import {FaSearch} from 'react-icons/fa'
import { ProductCard } from '@/components/productCard/productCard';


export default function Home() {
  return (
    <div className={styles.container}>

      <div>
        <h1>Produtos</h1>
      </div>

      <div className={styles.filterOptions}>
        <form  className={styles.searchBar}>
            <input
              type="text"
              placeholder="Buscar produto"
            />
          <button className={styles.searchButton}>
            <FaSearch />
          </button>
        </form >
      </div>

    <ProductCard />

    </div>
  );
}
