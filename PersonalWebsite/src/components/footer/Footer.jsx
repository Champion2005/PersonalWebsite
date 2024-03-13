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
        <footer className="mt-32 px-8 py-16 bg-gray-500/5 flex justify-center">
            <div className='text-white border-2 border-gray-400/10 p-4 rounded-lg'>
                <h2 className="text-2xl font-bold">Contact</h2>

                <div className="flex justify-between gap-2">
                    <p className="mt-4">{email}</p>
                    <CopyToClipboard text={email} onCopy={(text, result) => handleCopy()}>
                        <button className="border-2 border-gray-300/10 mt-3 py-1 px-2 rounded-lg hover:scale-105 hover:bg-gray-400/10">{copyState}</button>
                    </CopyToClipboard>
                </div>
            </div>
        </footer>
    );
};