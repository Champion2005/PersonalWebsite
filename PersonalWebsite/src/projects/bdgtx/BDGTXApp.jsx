
import { useState } from "react"
import { Home } from "./pages/Home"

function BDGTXApp() {
    const [curScreen, setCurScreen] = useState("home")

    if (curScreen == "home")
        return <Home />
    else
        return (
            <>

                <div className="min-h-screen flex flex-col place-content-center">
                    <h1 className="text-center text-white text-4xl lg:text-6xl">Nothing to see here... yet</h1>
                    <h2 className="pt-4 text-center text-emerald-500 text-2xl lg:text-4xl">BDGTX</h2>
                </div>
            </>
        )
}

export default BDGTXApp