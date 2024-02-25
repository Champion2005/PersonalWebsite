import { Navbar } from './Navbar'
import { TypeAnimation } from 'react-type-animation';

export const Header = () => {
  return (
    <>
      <div className='select-none text-center text-white/80'>
        <Navbar />
        <p className='pt-5 text-lg'>I am</p>
        <h1 className="mx-10 mb-2.5 pb-2 text-5xl font-extrabold bg-gradient-to-br from-emerald-900 to-emerald-400 bg-clip-text text-transparent">Aditya Patel</h1>
        <p className="absolute left-0 right-0 text-lg font-mono">
          { "" }
          <TypeAnimation
            sequence={[
              'print("Programmer 😎")', 1000,
              'std::cout << "Student 🤓" << std::endl;', 1000,  
              'println!("Founder? 🤔");', 1000,
              'console.log("Web developer 🕸️");', 1000,
              'printf("%s\\n", "Naval Warfare Officer 🛥️");', 1000,
              'System.out.println("idk what to put here 💀");', 1000,
              'echo "Hello World! ✌️"', 1000,
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
