import { createContext, useState } from "react";
import { food_list } from "../assets/assetss";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000";  // Update this URL as necessary for your API
    const [token, setToken] = useState("");

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

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
