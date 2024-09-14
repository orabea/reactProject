import React, { useContext, useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { CartContext } from '../../Context/CartContext';


export default function ProductDetails() {
    let { addToCart } = useContext(CartContext);

    async function addProductToCart(productId) {
        let response = await addToCart(productId);
        console.log(response);
    }

    const [productDetails, setProductDetails] = useState(null)


    let { id } = useParams();
    function getProductDetails(id) {
        axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
            .then(({ data }) => {
                setProductDetails(data.data)

            })
            .catch(() => {

            })
    }
    useEffect(() => {
        getProductDetails(id)
    }, [])
    return <>

        <div className="container flex justify-around">
            <div className='w-1/4 px-10 shadow-lg shadow-slate-100'>
                <img src={productDetails?.imageCover} alt={productDetails?.title} />
            </div>
            <div className='w-3/4 text-left py-9 px-9'>
                <h1 className='font-bold text-slate-900 text-lg py-5'>{productDetails?.title}</h1>
                <p className='text-slate-500'>{productDetails?.description}</p>
                <div className='mt-6 py-5 flex justify-between'>
                    <span className='font-bold italic text-lg'>price: {productDetails?.price} egp</span>
                    <span className='font-bold text-lg'>{productDetails?.ratingsAverage}<i className="px-4 text-yellow-500 fa-regular fa-star"></i>
                    </span>
                </div>
                <button onClick={() => addProductToCart(productDetails.id)} className='py-3 px-3 bg-green-700 rounded-md mt-5'> Add To Cart</button>
            </div>
        </div>
    </>

}
