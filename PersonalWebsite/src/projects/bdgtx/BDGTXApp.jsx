import { Link } from "react-router-dom";


export const BDGTXApp = () => {

    return (
        <>
            <div className="min-h-screen flex flex-col place-content-center">
                <h1 className="text-center text-white text-4xl lg:text-6xl">Welcome!</h1>
                <h2 className="pt-4 text-center text-emerald-500 text-2xl lg:text-4xl">BDGTX</h2>
                <Link to={'/bdgtx/home'} className="rounded-lg bg-emerald-500 text-white text-2xl px-4 py-2 mt-4 self-center">Get Started!</Link>
            </div>
        </>
    )
}

export const BDGTXError = () => {

    return (
        <>
            <div className="min-h-screen flex flex-col place-content-center">
                <h1 className="text-center text-white text-4xl lg:text-6xl">404 :(</h1>
                <h2 className="pt-4 text-center text-emerald-500 text-2xl lg:text-4xl">BDGTX</h2>
                <Link to={'/bdgtx/home'} type="reset" className="rounded-lg bg-emerald-500 text-white text-2xl px-4 py-2 mt-4 self-center">Go Home</Link>
            </div>
        </>
    )
}