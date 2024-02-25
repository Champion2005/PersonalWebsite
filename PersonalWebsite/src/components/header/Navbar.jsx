export const Navbar = () => {

    return (
        <>
            <div className="p-5 grid grid-cols-3 justify-evenly gap-3 font-bold">
                <div className="grid rounded-sm bg-gradient-to-br from-emerald-700 to-emerald-400 hover:scale-y-110">
                    <button className="flex m-[3px] rounded-sm bg-base text-emerald-400">
                        <a className="py-2 grow bg-gradient-to-br from-emerald-700 to-emerald-400 bg-clip-text text-transparent hover:scale-y-90" href='https://github.com/Champion2005' target='_blank' rel='noopener noreferrer'>Github</a>
                    </button>
                </div>
                <div className="grid rounded-sm bg-gradient-to-br from-emerald-700 to-emerald-400 hover:scale-y-110">
                    <button className="flex m-[3px] rounded-sm bg-base text-emerald-400">
                        <a className="py-2 grow bg-gradient-to-br from-emerald-700 to-emerald-400 bg-clip-text text-transparent hover:scale-y-90" href='https://apatel.xyz/resume.pdf' target='_blank' rel='noopener noreferrer'>Resume</a>
                    </button>
                </div>
                <div className="grid rounded-sm bg-gradient-to-br from-emerald-700 to-emerald-400 hover:scale-y-110">
                    <button className="flex m-[3px] rounded-sm bg-base text-emerald-400">
                        <a className="py-2 grow bg-gradient-to-br from-emerald-700 to-emerald-400 bg-clip-text text-transparent hover:scale-y-90" href='https://www.linkedin.com/in/aditya-patel52/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                    </button>
                </div>
            </div>
        </>
    )
}
