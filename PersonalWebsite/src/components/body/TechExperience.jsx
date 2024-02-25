import logo1 from './techlogos/logo1.svg'
import logo2 from './techlogos/logo2.svg'
import logo3 from './techlogos/logo3.svg'
import logo4 from './techlogos/logo4.svg'
import logo5 from './techlogos/logo5.svg'
import logo6 from './techlogos/logo6.svg'
import logo7 from './techlogos/logo7.svg'
import logo8 from './techlogos/logo8.svg'
import logo9 from './techlogos/logo9.svg'


export const TechExperience = () => {

    return (
        <>
            <section className='select-none mt-20 py-10 relative after:absolute after:bg-blue after:inset-0 after:skew-y-3 after:-z-10 after:bg-gradient-to-br after:from-emerald-800 after:to-emerald-500 after:border-y-4 after:border-white/50'>
                <h2 className="pt-5 text-center text-black/75 text-4xl font-bold">Experienced with:</h2>
                <div className='py-10 px-10'>
                    <div className='flex flex-wrap justify-center'>
                        <img className='h-16 m-2' src={logo1} alt={`logo1`} />
                        <img className='h-16 m-2' src={logo2} alt={`logo2`} />
                        <img className='h-16 m-2' src={logo3} alt={`logo3`} />
                        <img className='h-16 m-2' src={logo4} alt={`logo4`} />
                        <img className='h-16 m-2' src={logo5} alt={`logo5`} />
                        <img className='h-16 m-2' src={logo6} alt={`logo6`} />
                        <img className='h-16 m-2' src={logo7} alt={`logo7`} />
                        <img className='h-16 m-2' src={logo8} alt={`logo8`} />
                        <img className='h-16 m-2' src={logo9} alt={`logo9`} />
                    </div>
                </div>
            </section>
        </>
    )
}
