import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const Footer = () => {
    const [copyState, setCopyState] = useState('Copy')

    const email = "patel@apatel.xyz";

    const handleCopy = () => {
        setCopyState("Copied!");
        setTimeout(() => {
            setCopyState("Copy");
        }, 3000);
    };

    return (
        <footer className="mt-32 px-8 pt-16 bg-gray-500/5 grid justify-center">
            <div className='text-white border-2 border-gray-400/10 p-4 rounded-lg'>
                <h2 className="text-2xl font-bold">Contact</h2>

                <div className="flex justify-between gap-2">
                    <p className="mt-4">{email}</p>
                    <CopyToClipboard text={email} onCopy={(text, result) => handleCopy()}>
                        <button className="border-2 border-gray-300/10 mt-3 py-1 px-2 rounded-lg hover:scale-105 hover:bg-gray-400/10">{copyState}</button>
                    </CopyToClipboard>
                </div>
            </div>

            <div className="mt-10 mb-5 gap-2 flex justify-center items-center">
                <FontAwesomeIcon style={{'color': 'white', 'font-size': '0.75rem', 'line-height': '1rem'}} icon={faCopyright} />
                <p className='text-white text-center text-xs'>2024 Aditya Patel ❤️</p>
            </div>
        </footer>
    );
};