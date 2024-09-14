import React, { useEffect, useState } from 'react'
import axios from 'axios'



export default function Catigories() {
    const [categories, setCategories] = useState([])

    function getCategories() {
        axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
            .then((data) => {
                setCategories(data.data.data);
                // console.log(data.data.data);
            })
            .catch((error) => {

            })
    }

    useEffect(() => {
        getCategories();
    }, [])
    return <>
        <div className='flex flex-wrap py-8 items-center h-28 '>
            {categories.map((category) =>
                <div className='w-1/4 px-4'>
                    <div className='py-4 text-start product shadow-lg hover:shadow-slate-700 '>
                        <img src={category.image} alt={category.title} />
                        <span className='block font-light text-slate-700 py-2 px-2'>{category.name}</span>

                    </div>
                </div>

            )}

        </div>
    </>


}
