import React, { useContext, useEffect, useState } from 'react'
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { CounterContext } from '../../Context/CounterContext'
import { UserContext } from '../../UserContext/UserContext'


export default function Navbar() {

    useEffect(() => { }, [])

    let { counter } = useContext(CounterContext);
    let { UserLogin } = useContext(UserContext);

    return <>
        <nav className='fixed top-0 left-0 right-0 bg-slate-200'>
            <div className="container items-center flex justify-between py-4 px-4 mx-auto">
                <div>
                    {/* <img src={logo} alt="logo img" className='' /> */}
                    <ul className='flex  items-center '>
                        {/* {UserLogin !== null ? <> */}
                        <li className='px-2 text-slate-500 font-bold '><NavLink to=''>Home</NavLink></li>
                        <li className='px-2 text-slate-500 font-bold '><NavLink to='Products'>Products</NavLink></li>
                        <li className='px-2 text-slate-500 font-bold '><NavLink to='Cart'>Cart</NavLink> <span className='text-yellow-500'>{counter}</span></li>
                        <li className='px-2 text-slate-500 font-bold '><NavLink to='Catigories'>Categories</NavLink></li>
                        <li className='px-2 text-slate-500 font-bold '><NavLink to='brands'>Brands</NavLink></li>

                        {/* </> : null} */}

                    </ul>
                </div>

                <div>
                    <ul className='flex flex-row items-center'>
                        {UserLogin === null ? <>

                            <li className='px-2 text-slate-800 font-bold start-1/2 '><NavLink to='Register'>Register</NavLink></li>
                            <li className='px-2 text-slate-800 font-bold '><NavLink to='Login'>Login</NavLink></li>
                        </> : <li className='px-2 text-slate-800 font-bold '><NavLink to='Login'>Logout</NavLink></li>
                        }
                        <li className='flex items-center mx-3'>
                            <i className='fab mx-2 fa-facebook'></i>
                            <i className='fab mx-2 fa-twitter'></i>
                            <i className='fab mx-2 fa-youtube'></i>
                            <i className='fab mx-2 fa-tiktok'></i>
                            <i className='fab mx-2 fa-instagram'></i>
                        </li>

                    </ul>
                </div>

            </div>

        </nav>


    </>

}
