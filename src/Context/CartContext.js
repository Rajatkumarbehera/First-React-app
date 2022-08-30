import { createContext, useContext, useEffect, useState } from "react";
import { useProduct } from "./ProductContext";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);
    const { productId, setProductId } = useProduct();
    const [cartItems, setCartItems] = useState([]);
    
    useEffect(() => {
        const cartItemsData = JSON.parse(localStorage.getItem('cartItems'));

        if(cartItemsData) {
            setCartItems(cartItemsData);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);


    const addToCart = (newItem) => {
        setCartItems((previousItems) => [...previousItems, newItem])
    }

    const removeFromCart = (id) => {
        setCartItems((previousItems) => previousItems.filter(item => item.id !== id))
    }

    const values = {
        productList,
        loading,
        cartItems
    }

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);
