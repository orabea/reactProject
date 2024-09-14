import React, { useEffect, useState } from 'react'
import style from './Products.module.css'
import axios from 'axios'


export default function Products({ }) {

    // async function addToCart() {
    //     let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, { productId: product._id }, {
    //         headers: {
    //             token: localStorage.getItem('token')
    //         }

    //     })
    //     console.log(data);
    // }

    const [products, setProducts] = useState([])

    function getProduct() {
        axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
            .then((data) => {
                setProducts(data.data.data);
            })
            .catch((error) => {

            })
    }


    useEffect(() => {
        getProduct();
    }, [])
    return <>
        <div className='flex flex-wrap py-8 items-center '>
            {products.map((product) =>
                <div key={product.id} className='w-1/4 px-4'>
                    <div className='py-4 text-start product shadow-lg hover:shadow-slate-700'>
                        <img src={product.imageCover} alt={product.title} />
                        <span className='block font-light text-slate-700 py-2 px-2'>{product.category.name}</span>
                        <h3 className='font-normal text-lg text-slate-950 py-2 px-2'>{product.title.split(' ').slice(0, 2).join(' ')}</h3>
                        <div className='flex justify-between items-center px-1'>
                            <span className=''>{product.price}: egp</span>
                            <span className=''>{product.ratingsAverage} <i className='fas fa-star text-yellow-500'></i> </span>
                        </div>
                        <button className='btn pt-4 mt-4 align-center'>add to cart</button>
                    </div>
                </div>

            )}

        </div>
    </>

}
