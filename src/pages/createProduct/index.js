import styles from './styles.module.css'
import {useState} from 'react'

export default function CreateProduct(){

    const [image, setImage] = useState(null);
    const [product, setProduct] = useState({
        nome: "",
        preco: "",
        descricao: "",
        categoria: "",
        imagem: ""
      });

      const handleImageChange = (e) => {
        setImage(e.target.files[0]);
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', image);

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
          });

          const data = await response.json();
          if (data.imagePath) {
            console.log('Imagem carregada com sucesso:', data.imagePath);
            product.imagem = data.imagePath;
          } else {
            console.error('Erro ao carregar a imagem');
          }

          setProduct(
            {
                nome: "",
                preco: "",
                descricao: "",
                categoria: "",
                imagem: ""
              }
          )
        console.log(product);
        // Aqui você pode fazer o POST com os dados, etc.
      };

      return (
        <div className={styles.container}>
          <h1 className={styles.title}>Cadastrar novo produto</h1>
      
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Nome do produto</label>
              <input
                className={styles.input}
                type="text"
                name="nome"
                value={product.nome}
                onChange={handleChange}
                required
              />
            </div>
      
            <div className={styles.formGroup}>
              <label className={styles.label}>Preço do produto</label>
              <input
                className={styles.input}
                type="text"
                name="preco"
                value={product.preco}
                onChange={handleChange}
                required
              />
            </div>
      
            <div className={styles.formGroup}>
              <label className={styles.label}>Descrição</label>
              <textarea
                className={styles.textarea}
                name="descricao"
                value={product.descricao}
                onChange={handleChange}
                required
              />
            </div>
      
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="categoria">Categoria</label>
              <select
                className={styles.select}
                id="categoria"
                name="categoria"
                value={product.categoria}
                onChange={handleChange}
                required
              >
                <option value="">Selecione uma categoria</option>
                <option value="roupa">Roupa</option>
                <option value="eletronico">Eletrônico</option>
                <option value="livro">Livro</option>
              </select>
            </div>
      
            <div className={styles.formGroup}>
              <label className={styles.label}>Imagem do produto</label>
              <input
                className={styles.inputFile}
                type="file"
                onChange={handleImageChange}
                required
              />
            </div>
      
            <button type="submit" className={styles.button}>
              Cadastrar Produto
            </button>
          </form>
        </div>
      );
      
}