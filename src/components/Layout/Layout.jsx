import React, { useEffect, useState } from 'react'
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    const [Count, setCount] = useState(0)
    useEffect(() => { }, [])
    return <>
        <Navbar />
        <div className="container mx-auto my-6 py-6">
            <Outlet></Outlet>
        </div>

        <Footer />

    </>

}
