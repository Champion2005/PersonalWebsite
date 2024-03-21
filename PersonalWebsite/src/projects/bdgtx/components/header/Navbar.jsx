import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = (props) => {
    const Home = "/bdgtx/home"
    const Goals = "/bdgtx/goals"
    const Stats = "/bdgtx/stats"
    const Blog = "/bdgtx/blog"

    const handleButtonStyle = (path) => {
        if (props.curPath == path) {
            return 'bg-blue-500 hover:bg-blue-300'
        }
        else {
            return 'bg-emerald-500 hover:bg-emerald-300'
        }
    }
    
    return (
        <>
            <div className="mt-10">
                <nav className="text-black flex my-4 justify-center gap-2 sm:gap-8">
                    <a href={Home} className={'outline-emerald-900 font-mono text-sm px-2 py-1 rounded-lg ' + handleButtonStyle('/home')}>Home</a>
                    <a href={Goals} className={'outline-emerald-900 font-mono text-sm px-2 py-1 rounded-lg ' + handleButtonStyle('/goals')}>Goals</a>
                    <a href={Stats} className={'outline-emerald-900 font-mono text-sm px-2 py-1 rounded-lg ' + handleButtonStyle('/stats')}>Stats</a>
                    <a href={Blog} className={'outline-emerald-900 font-mono text-sm px-2 py-1 rounded-lg ' + handleButtonStyle('/blog')}>Blog</a>
                </nav>
            </div>
        </>
    )
}