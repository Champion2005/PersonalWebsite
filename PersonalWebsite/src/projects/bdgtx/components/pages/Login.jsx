import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LOGO from '../../assets/LOGO4096by1150.png'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
        <div className="flex flex-col h-screen md:flex-row ">
            <div className="flex place-items-center md:w-7/12 md:border-r-2 md:h-screen md:border-emerald-500">
                <img src={LOGO} alt="logo2" className="self-center" />
            </div>
            <div className='p-4 flex flex-col justify-center items-center font-mono text-white grow'>
                <h2 className="text-center text-4xl mb-10">Welcome!</h2>
                <form className='flex flex-col'onSubmit={handleSubmit}>
                    <div className='mb-5 flex flex-col items-center'>
                        <label className='text-lg'>Email</label>
                        <input 
                            className="self-stretch p-2 my-2 outline-none bg-transparent border-2 border-emerald-500 rounded-lg"
                            type="email" 
                            value={email} 
                            onChange={handleEmailChange} />
                    </div>
                    <div className='mb-5 flex flex-col items-center'>
                        <label className='text-lg'>Password</label>
                        <input 
                            className='self-stretch p-2 my-2 outline-none bg-transparent border-2 border-emerald-500 rounded-lg'
                            type="password" 
                            value={password} 
                            onChange={handlePasswordChange} />
                    </div>
                    <button className='mb-2 rounded-lg border-2 border-blue-200 bg-blue-500 hover:bg-blue-300 text-white font-mono text-xl px-4 py-1 self-center' type="submit">Login</button>
                    <Link to={'/bgdtx/signup'} className='underline text-white font-mono text-lg px-4 py-1 self-center'>Sign Up</Link>
                </form>
            </div>
        </div>
    );
};