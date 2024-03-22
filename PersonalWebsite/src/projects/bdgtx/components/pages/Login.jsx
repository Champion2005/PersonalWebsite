import React, { useState } from 'react';
import LOGO from '../../assets/LOGO4096by4096.png'
import LOGO2 from '../../assets/LOGO4096by1150.png'

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
        <div className="flex flex-col h-screen place-content-center place-items-center md:flex-row ">
            <div className="max-w-7/12 border-r-2 border-emerald-500">
                {
                    window.innerWidth > 1000 ?
                        <img src={LOGO} alt="logo" className="max-h-screen" /> :
                        <img src={LOGO2} alt="logo2" className="max-h-[12vh]" />
                }
            </div>
            <div className='flex flex-col items-center font-mono text-white grow'>
                <h2 className="text-center text-2xl ">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='text-lg'>Email: </label>
                        <input 
                            className="p-2 my-2 outline-none  bg-transparent border-2 border-emerald-500 rounded-lg"
                            type="email" 
                            value={email} 
                            onChange={handleEmailChange} />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input 

                            type="password" 
                            value={password} 
                            onChange={handlePasswordChange} />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};