import { Navbar } from './Navbar'
import { TypeAnimation } from 'react-type-animation';

export const Header = () => {
  return (
    <>
      <div className='select-none text-center text-white/80'>
        <Navbar />
        <h1 className="mx-10 mb-2.5 pt-5 pb-2 text-5xl font-bold bg-gradient-to-br from-emerald-600/50 to-emerald-400 bg-clip-text text-transparent">Aditya Patel</h1>
        <p className="absolute left-0 right-0 text-lg font-mono">
          { "" }
          <TypeAnimation
            sequence={[
              'print("Hello World")', 1000,
              'std::cout << "Hello World" << std::endl;', 1000,  
              'println!("Hello World");', 1000,
              'console.log("Hello World");', 1000,
              'printf("%s\\n", "Hello World");', 1000,
              'System.out.println("Hello World");', 1000,
              'echo "Hello World"', 1000,
            ]}
            speed={20}
            repeat={Infinity}
            showCursor={true}
          />
        </p>
      </div>
    </>
  )
}
