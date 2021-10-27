import { useCart } from "../../Providers/Cart";
import "./styles.css"


const Cart = () => {

    const { cart, removeCart } = useCart()

    return (
        <>
            <h2 className="title-page"> Carrinho </h2>
            <section className="product-container">
                {
                    cart.map(item => {
                        return <div className="product" key={item.title}>
                        <h4 className="product-title"> {item.title} </h4>
                        <img className="product-image" src={item.image} alt={item.title} />
                        <p className="product-description"> {item.description} </p>
                        <p className="product-price"> {item.price} </p>
                        <button className="product-button--cart" onClick={() => removeCart(item)}> Remover do carrinho </button>
                        </div>
                    })
                }
            </section>
        </>
    )
}

export default Cart;