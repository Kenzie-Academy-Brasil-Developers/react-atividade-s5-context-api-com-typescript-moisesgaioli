import { useState } from "react";
import { useCart } from "../../Providers/Cart";
import "./styles.css"


const Products = () => {

  const [products, setProducts] = useState([
    {
      id: 11,
      title: "Samsung Galaxy A01 Dual SIM 32 GB preto 2 GB RAM",
      description: "Processador Snapdragon 439 Octa-Core de 2GHz com 2GB de RAM.",
      price: 699.99,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_661764-MLA44282592265_122020-O.webp",
    },
    {
      id: 12,
      title: "Xiaomi Redmi 9A Dual SIM 32 GB azul 2 GB RAM",
      description:
        "Processador MediaTek Helio G25 Octa-Core de 2GHz com 2GB de RAM.",
      price: 799.99,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_958898-MLA43824398273_102020-O.webp",
    },
    {
      id: 13,
      title: "LG K11+ Dual SIM 32 GB dourado 3 GB RAM",
      description:
        "Processador MediaTek Helio G25 Octa-Core de 2GHz com 2GB de RAM.",
      price: 859.1,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_633672-MLA31348110302_072019-O.webp",
    },
    {
      id: 45,
      title: 'iPhone 11 Apple (64GB) Branco Tela 6,1" 4G Câmera 12MP iOS',
      description:
        "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
      price: 3899.99,
      image:
        "https://images-americanas.b2w.io/produtos/01/00/img/1614132/3/1614132374_1GG.jpg",
    },
  ])

  const { addCart } = useCart()

  return (
    <>  
      <h2 className="title-page"> Produtos </h2>
      <section className="product-container">
        {
          products.map(item => {
            return <div className="product" key={item.id}>
              <h4 className="product-title"> {item.title} </h4>
              <img className="product-image" src={item.image} alt={item.title} />
              <p className="product-description"> {item.description} </p>
              <p className="product-price"> {item.price} </p>
              <button className="product-button" onClick={() => addCart(item)}> Adicionar ao carrinho </button>
            </div>
          })
        }
      </section>
    </>
  )
}

export default Products;