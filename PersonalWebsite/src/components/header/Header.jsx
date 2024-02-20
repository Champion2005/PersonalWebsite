import { useState, useEffect } from 'react'
import { Navbar } from './Navbar'

export const Header = () => {
  const [curPrint, setCurPrint] = useState(0);

  const prints = [
    'print("Hello World")',
    'System.out.println("Hello World");', 
    'println!("Hello World");', 
    'console.log("Hello World");', 
    'printf("%s\\n", "Hello World");',
    'std::cout << "Hello World" << std::endl;',
    'echo "Hello World"',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurPrint((prev) => (prev+1)%7);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='text-center text-white'>
        <Navbar />
        <h1 className="mx-10 mb-2.5 pt-5 pb-2 text-5xl font-bold bg-gradient-to-br from-teal to-lime bg-clip-text text-transparent">Aditya Patel</h1>
        <p className="mx-2 mb-0 mb-2 text-xl">
          { prints[curPrint] }
        </p>
      </div>
    </>
  )
}
