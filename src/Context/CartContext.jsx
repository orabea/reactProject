import React, { createContext } from "react";
import axios from "axios";
import { TokenContext } from "./TokenContext";
import toast, { Toaster } from "react-hot-toast";



export const CartContext = createContext();

export default function CartContextProvider(props) {
    let headers = {
        token: localStorage.getItem("userToken")
    }

    async function addToCart(productId) {
        try {
            const response = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, { productId }, { headers });
            console.log(response?.data.status);
            toast.success(response?.data.status);
            return response;
        } catch (error) {
            toast.error(response?.data.status);
            return error;
        }
    }
    async function getCartItem() {
        return await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, { headers })
            .then((response) => {
                console.log(response);
                return response;
            }).catch((error) => {
                console.log(error);
                return error;
            })
    }
    async function removeCartItem(productId) {
        return await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, { headers })
            .then((response) => {
                console.log(response);
                return response;
            }).catch((error) => {
                console.log(error);
                return error;
            })
    }

    return (
        <CartContext.Provider value={{ addToCart, getCartItem, removeCartItem }}>
            {props.children}
        </CartContext.Provider>
    );
}