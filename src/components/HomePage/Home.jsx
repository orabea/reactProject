import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import RecentProduct from '../RecentProduct/RecentProduct'
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider'

export default function Home() {

    useEffect(() => { }, [])
    return <>

        {/* <CategoriesSlider /> */}
        <RecentProduct />
    </>

}
