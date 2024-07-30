import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assetss";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const newCartItems = { ...prev };
            if (!newCartItems[itemId]) {
                newCartItems[itemId] = 1;
            } else {
                newCartItems[itemId] += 1;
            }
            return newCartItems;
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCartItems = { ...prev };
            if (newCartItems[itemId]) {
                if (newCartItems[itemId] === 1) {
                    delete newCartItems[itemId];
                } else {
                    newCartItems[itemId] -= 1;
                }
            }
            return newCartItems;
        });
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;

