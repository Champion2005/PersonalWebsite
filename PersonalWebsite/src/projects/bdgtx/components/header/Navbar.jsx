import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = (props) => {
    const Home = "/bdgtx/home"
    const Goals = "/bdgtx/goals"
    const Stats = "/bdgtx/stats"
    const Blog = "/bdgtx/blog"

    const handleButtonStyle = (path) => {
        if (props.curPath == path) {
            return 'border-2 border-blue-200 bg-blue-500 hover:bg-blue-300'
        }
        else {
            return 'border-2 border-emerald-200 bg-emerald-500 hover:bg-emerald-300'
        }
    }
    
    return (
        <>
            <div>
                <nav className="text-black flex my-4 justify-center gap-2 sm:gap-8">
                    <Link to={Home} className={'outline-emerald-900 font-mono text-sm px-2 py-1 rounded-lg ' + handleButtonStyle('/home')}>Home</Link>
                    <Link to={Goals} className={'outline-emerald-900 font-mono text-sm px-2 py-1 rounded-lg ' + handleButtonStyle('/goals')}>Goals</Link>
                    <Link to={Stats} className={'outline-emerald-900 font-mono text-sm px-2 py-1 rounded-lg ' + handleButtonStyle('/stats')}>Stats</Link>
                    <Link to={Blog} className={'outline-emerald-900 font-mono text-sm px-2 py-1 rounded-lg ' + handleButtonStyle('/blog')}>Blog</Link>
                </nav>
            </div>
        </>
    )
}