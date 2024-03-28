import BG from './shock.jpg'

export const H404 = () => {

    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${BG})`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    WebkitBackgroundSize: 'cover', // for Safari
                    MozBackgroundSize: 'cover', // for Firefox
                    OBackgroundSize: 'cover', // for Opera
                    backgroundAttachment: 'fixed',
                }}
                className="w-full h-screen"
            >
                {/* <img className='bg-cover bg-center' src={BG} alt="shock" /> */}
                <h1 class="flex h-screen justify-center items-center text-red-500 font-bold font-mono text-9xl">404</h1>
            </div>
        </>
    )
}