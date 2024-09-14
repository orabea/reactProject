import React, { useEffect, useState } from 'react'
import style from './Footer.module.css'

export default function Footer() {
    const [Count, setCount] = useState(0)
    useEffect(() => { }, [])
    return <>

        <div className='fixed bottom-0 left-0 right-0 pt-6 pb-6 bg-slate-900 flex justify-around items-center'>
            <div>
                <h2 className='text-slate-200 font-bold'>contact us:</h2>
                <ul>
                    <i className='fab mx-2 fa-facebook text-slate-200'></i>
                    <i className='fab mx-2 fa-twitter text-slate-200'></i>
                    <i className='fab mx-2 fa-youtube text-slate-200'></i>
                    <i className='fab mx-2 fa-tiktok text-slate-200'></i>
                    <i className='fab mx-2 fa-instagram text-slate-200'></i>
                </ul>
            </div>
            <div>
                <p className='text-slate-200'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.  </p>
            </div>
        </div>

    </>

}
