import LOGO from '../../assets/LOGO4096by1150.png'

export const Header = () => {
    return (
        <>
            <section className='flex flex-col items-center'>
                <div>
                    <a href="https://apatel.xyz/#/bdgtx"><img className='max-h-[10vh]' src={LOGO} alt="logo" /></a>
                </div>
            </section>
        </>
    )
}