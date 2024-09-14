import React, { useEffect, useState } from 'react'
import style from './CategoriesSlider.module.css'
import Slider from "react-slick";
import axios from 'axios';

export default function CategoriesSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
    };
    const [categories, setCategories] = useState([])

    function getCategories() {
        axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
            .then((data) => {
                setCategories(data.data.data);

            })
            .catch((error) => {

            })
    }

    const [Count, setCount] = useState(0)
    useEffect(() => {
        getCategories();
    }, [])
    return <>

        <Slider {...settings}>
            {categories.map((category) => {
                <div>
                    <img src={category.image} alt={category.name} />
                    <h3>{category.name}</h3>
                </div>

            })}
        </Slider>
    </>

}
