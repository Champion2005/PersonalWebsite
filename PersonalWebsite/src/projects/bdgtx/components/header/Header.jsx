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
            <section className='flex flex-col items-center'>
                <div>
                    <a href="https://apatel.xyz/#/bdgtx"><img className='max-h-[10vh]' src={LOGO} alt="logo" /></a>
                    <p className='-m-4 font-italic text-white font-light text-lg text-center font-mono'>Control your money</p>
                </div>    
            </section>
            <Navbar curPath={curPath}/>
        </>
    )
}