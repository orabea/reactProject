import React, { useContext, useEffect, useState } from 'react';
import style from './Login.module.css'
import { useFormik } from 'formik';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { UserContext } from '../../UserContext/UserContext';



export default function Login() {
    let { setUserLogin } = useContext(UserContext);
    let navigate = useNavigate();

    const [apiError, setapiError] = useState('');
    const [loading, setloading] = useState(false)

    async function handleLogin(formValue) {
        setloading(true);
        axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, formValue)
            .then((apiResponse) => {
                if (apiResponse.data.message === 'success') {

                    localStorage.setItem('userToken', apiResponse.data.token);
                    setUserLogin(apiResponse.data.token)
                    navigate('/Products');
                }

            })
            .catch((apiResponse) => {
                setloading(false);
                setapiError(apiResponse?.response?.data?.message)
            })


    }

    let validationSchema = Yup.object().shape({
        email: Yup.string().email('email is invalid').required('mail is required'),
        password: Yup.string().matches(/^[A-Z][a-z1-9]{5,10}$/, 'password must be start with char').required('password is required'),
    })

    let Formik = useFormik({
        initialValues: {
            email: '',
            password: '',

        },
        validationSchema: validationSchema,
        onSubmit: handleLogin
    })

    return <>
        <div className='mx-auto max-w-xl py-6'>
            <h2 className='text-3xl font-bold mb-6'>Login Now</h2>
            {apiError ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                {apiError}
            </div> : null}


            <form onSubmit={Formik.handleSubmit} className='text-start'>


                <div className="relative z-0 w-full mb-5 ">
                    <input id="email" onInput={Formik.handleChange} onChange={Formik.handleChange} value={Formik.values.email} type="email" name="email" className="block  py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:border-slate-600 peer" placeholder=" " />
                    <label htmlFor="email" className=" text-left peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-slate-600 peer-focus:dark:text-slate-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your email:</label>
                </div>
                {Formik.errors.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    {Formik.errors.email}
                </div> : null}


                <div className="relative z-0 w-full mb-5 ">
                    <input id="password" onInput={Formik.handleChange} onChange={Formik.handleChange} value={Formik.values.password} type="password" name="password" className="block  py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:border-slate-600 peer" placeholder=" " />
                    <label htmlFor="password" className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-slate-600 peer-focus:dark:text-slate-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your password:</label>
                </div>
                {Formik.errors.password ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    {Formik.errors.password}
                </div> : null}

                <div className='flex align-middle items-center'>

                    <button type="submit" className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                "> {loading ? <i className='fas fa-spinner fa-spin'></i> : "Login"} </button>

                    <p className='ps-4'>didn't have acount yet? <span><Link to={'/register'}>Register now</Link></span></p>
                </div>

            </form>
        </div>
    </>

}
