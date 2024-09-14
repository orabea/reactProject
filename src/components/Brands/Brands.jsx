import React, { useEffect, useState } from 'react'

import axios from 'axios'

export default function Brands() {
    const [brands, setbrands] = useState([])

    function getBrands() {
        axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
            .then((data) => {
                setbrands(data.data.data);
                // console.log(data.data.data);

            })
            .catch(() => { })
    }

    useEffect(() => {
        getBrands();
    }, [])
    return <>
        <h1 className='items-center text-slate-800 font-bold text-xl px-9 mx-5'>All Brands</h1>
        <div className='flex flex-wrap py-8 items-center h-28 pb-9 mb-9'>
            {brands.map((brand) =>
                <div className='w-1/4 px-4'>
                    <div className='py-4 text-start product shadow-lg hover:shadow-slate-700 '>
                        <img src={brand.image} alt={brand.title} />
                        <span className='block font-light text-slate-700 py-2 px-2'>{brand.name}</span>

                    </div>
                </div>

            )}

        </div>
    </>

}
