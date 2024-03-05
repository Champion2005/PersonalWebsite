import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const Footer = () => {
    const [copyState, setCopyState] = useState('Copy Email')

    const email = "adityapatel0905@gmail.com";

    const handleCopy = () => {
        setCopyState("Copied!");
        setTimeout(() => {
            setCopyState("Copy Email");
        }, 3000);
    };

    return (
        <footer className="mt-32 px-8 py-16 bg-gray-500/5 flex justify-center">
            <div className='relative text-white border-2 border-gray-400/10 p-4 rounded-lg'>
                <h2 className="text-2xl font-bold">Contact</h2>

                <p className="mt-4">{email}</p>
                <CopyToClipboard text={email} onCopy={(text, result) => handleCopy()}>
                    <button className="border-2 border-gray-300/10 mt-3 py-1 px-2 -ml-1 rounded-lg">{copyState}</button>
                </CopyToClipboard>
            </div>
        </footer>
    );
};