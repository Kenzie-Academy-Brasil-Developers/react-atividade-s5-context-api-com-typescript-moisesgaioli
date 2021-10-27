import { createContext, ReactNode, useContext, useState } from "react";

interface CartProviderProps {
    children: ReactNode
}

interface Product {
    id: number,
    title: string,
    description: string,
    price: number,
    image: string
}

interface CartProviderData {
    cart: Product[],
    addCart: (product: Product) => void,
    removeCart: (product: Product) => void
}


const CartCotext = createContext<CartProviderData>({} as CartProviderData)

export const CartProvider = ({ children }: CartProviderProps) => {

    const [cart, setCart] = useState<Product[]>([])


    const addCart = (product: Product) => {
        setCart([...cart, product])
    }

    const removeCart = (product: Product) => {
        const removeItem = cart.filter(item => item.id !== product.id)
        setCart(removeItem)
    }

    return (
        <CartCotext.Provider value={{
            addCart,
            cart,
            removeCart
        }}>
            {children}
        </CartCotext.Provider>
    )
}

export const useCart = () =>  useContext(CartCotext)