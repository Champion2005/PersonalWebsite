
export const BDGTXApp = () => {
    const onReset = () => {
        window.location.href = "/#/bdgtx/home";
    }

    return (
        <>
            <div className="min-h-screen flex flex-col place-content-center">
                <h1 className="text-center text-white text-4xl lg:text-6xl">Welcome!</h1>
                <h2 className="pt-4 text-center text-emerald-500 text-2xl lg:text-4xl">BDGTX</h2>
                <button onClick={onReset} type="reset" className="rounded-lg bg-emerald-500 text-white text-2xl px-4 py-2 mt-4 self-center">Get Started!</button>
            </div>
        </>
    )
}

export const BDGTXError = () => {
    const onReset = () => {
        window.location.href = "/#/bdgtx/home";
    }

    return (
        <>
            <div className="min-h-screen flex flex-col place-content-center">
                <h1 className="text-center text-white text-4xl lg:text-6xl">You're lost!</h1>
                <h2 className="pt-4 text-center text-emerald-500 text-2xl lg:text-4xl">BDGTX</h2>
                <button onClick={onReset} type="reset" className="rounded-lg bg-emerald-500 text-white text-2xl px-4 py-2 mt-4 self-center">Go Home</button>
            </div>
        </>
    )
}