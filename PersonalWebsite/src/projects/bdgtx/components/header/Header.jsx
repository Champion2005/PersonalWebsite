import { Link } from 'react-router-dom';
import LOGO from '../../assets/LOGO4096by1150.png'

import { Navbar } from './Navbar'

export const Header = () => {
    let curPath = window.location.href;
    if (curPath.includes('/home')) curPath = '/home'
    else if (curPath.includes('/goals')) curPath = '/goals'
    else if (curPath.includes('/stats')) curPath = '/stats' 
    else if (curPath.includes('/blog')) curPath = '/blog'

    return (
        <>
            <section>
                <div className='flex'>
                    <div className='grow flex justify-self-start items-center py-4'>
                        <a href="https://apatel.xyz/bdgtx/home"><img className='max-h-[12vh] -ml-[3vh] md:ml-0' src={LOGO} alt="logo"/></a>
                        {/* <p className='font-italic text-white font-light text-sm md:text-lg  ml-[3vh] md:ml-0 font-mono'>Control your money</p> */}
                    </div>
                    <Link to={'/bdgtx/login'} className='rounded-lg border-2 border-blue-200 bg-blue-500 hover:bg-blue-300 text-white font-mono text-xl px-4 py-1 mx-4 self-center'>Login</Link>
                </div>    
                <Navbar curPath={curPath}/>
            </section>
        </>
    )
}