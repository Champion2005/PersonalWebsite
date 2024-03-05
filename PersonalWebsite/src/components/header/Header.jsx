import { Navbar } from './Navbar'
import { TypeAnimation } from 'react-type-animation';
import CurveLine from './assets/Curve Line.svg';

import './Header.css'

export const Header = () => {
  return (
    <>
      <img className="absolute inset-0 w-full h-auto -z-10 aspect-auto	opacity-10" src={CurveLine}></img>
      <div className='flex flex-col h-dvh content-center select-none text-center text-white/80'>
        <Navbar />
        <div className='flex flex-col justify-center grow'>
          <p className='pt-5 text-2xl 2xl:text-4xl font-mono'>I am</p>
          <h1 className="mx-10 mb-3 pb-3 text-5xl md:text-7xl 2xl:text-9xl 2xl:pb-6 font-extrabold bg-gradient-to-br from-emerald-900 to-emerald-400 bg-clip-text text-transparent">Aditya Patel</h1>
          <p className="text-lg md:text-2xl 2xl:text-4xl font-mono">
            {""}
            <TypeAnimation
              sequence={[
                'print("Programmer")', 1000,
                'System.out.println("Student");', 1000,
                'println!("Founder?");', 1000,
                'console.log("Web Dev");', 1000,
                'printf("Genius\\n");', 1000,
                'echo "Naval Warfare Officer"', 1000,
                'cout << "Hello World! ✌️" << endl;', 1000,
              ]}
              speed={20}
              repeat={Infinity}
              showCursor={true}
            />
          </p>

          <div className='text-white/50 m-20 p-4 self-center flex flex-col items-center animate-bounce'>
            <p className='font-mono text-sm p-1'>Scroll</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="min-w-6 size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
