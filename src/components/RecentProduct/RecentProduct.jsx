import React, { useContext, useEffect, useState } from 'react'
import style from './RecentProduct.module.css'
import axios from 'axios'
import { CounterContext } from '../../Context/CounterContext'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'


export default function RecentProduct() {

    let { addToCart } = useContext(CartContext);

    async function addProductToCart(productId) {
        let response = await addToCart(productId);
        console.log(response);
        console.log(productId);
    }

    const [recentProducts, setRecentProducts] = useState([]);

    function getRecentProduct() {
        axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
            .then((response) => {
                setRecentProducts(response.data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        getRecentProduct();
    }, []);
    return <>
        <div className='flex flex-wrap py-8 items-center '>
            {recentProducts.map((product) =>
                <div key={product.id} className='w-1/5 px-4 product'>
                    <Link to={`/ProductDetails/${product.id}`}>
                        <div className='py-4 text-start product shadow-lg hover:shadow-slate-700'>
                            <img src={product.imageCover} alt={product.title} />
                            <span className='block font-light text-slate-700 py-2 px-2'>{product.category.name}</span>
                            <h3 className='font-normal text-lg text-slate-950 py-2 px-2'>{product.title.split(' ').slice(0, 2).join(' ')}</h3>
                            <div className='flex justify-between items-center px-1'>
                                <span className=''>{product.price}: egp</span>
                                <span className=''>{product.ratingsAverage} <i className='fas fa-star text-yellow-500'></i> </span>
                            </div>
                        </div>
                    </Link>
                    <div className=''>
                        <button onClick={() => addProductToCart(product.id)} className='btn pt-4 mt-4 align-center'>add to cart</button>

                    </div>
                </div>

            )}

        </div>
    </>

}
