import logo1 from './techlogos/logo1.svg'
import logo2 from './techlogos/logo2.svg'
import logo3 from './techlogos/logo3.svg'
import logo4 from './techlogos/logo4.svg'
import logo5 from './techlogos/logo5.svg'
import logo6 from './techlogos/logo6.svg'
import logo7 from './techlogos/logo7.svg'
import logo8 from './techlogos/logo8.svg'
import logo9 from './techlogos/logo9.svg'

import Slider from 'react-infinite-logo-slider'


export const TechExperience = () => {

    return (
        <>
            <section className='flex flex-col select-none mt-20 2xl:mt-32 py-10 relative after:absolute after:bg-blue after:inset-0 after:skew-y-3 after:-z-10 after:bg-gradient-to-br after:from-emerald-800 after:to-emerald-500 after:border-y-4 after:border-white/50'>
                <h2 className="pt-5 text-center text-black/75 text-4xl font-bold">Experienced With</h2>

                <div className='py-10 self-center w-full md:w-9/12 lg:w-[700px] fade'>
                    <Slider width="7rem" duration={20}>
                        <Slider.Slide>
                            <img className='h-16' src={logo1} alt={`logo1`} />
                        </Slider.Slide>
                        <Slider.Slide>
                            <img className='h-16' src={logo2} alt={`logo2`} />
                        </Slider.Slide>
                        <Slider.Slide>
                            <img className='h-16' src={logo3} alt={`logo3`} />
                        </Slider.Slide>
                        <Slider.Slide>
                            <img className='h-16' src={logo4} alt={`logo4`} />
                        </Slider.Slide>
                        <Slider.Slide>
                            <img className='h-16' src={logo5} alt={`logo5`} />
                        </Slider.Slide>
                        <Slider.Slide>
                            <img className='h-16' src={logo6} alt={`logo6`} />
                        </Slider.Slide>
                        <Slider.Slide>
                            <img className='h-16' src={logo7} alt={`logo7`} />
                        </Slider.Slide>
                        <Slider.Slide>
                            <img className='h-16' src={logo8} alt={`logo8`} />
                        </Slider.Slide>
                        <Slider.Slide>
                            <img className='h-10' src={logo9} alt={`logo9`} />
                        </Slider.Slide>
                    </Slider>
                </div>
            </section>
        </>
    )
}
