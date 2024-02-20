export const Navbar = () => {

    return (
        <>
            <div className="p-5 grid grid-cols-3 justify-evenly gap-3">
                <button className="flex rounded-lg bg-transparent text-emerald-400 ring-2 ring-emerald-400 hover:scale-y-110">
                    <a className="py-2 grow hover:scale-y-90" href='https://github.com/Champion2005' target='_blank' rel='noopener noreferrer'>Github</a>
                </button>
                <button className="flex rounded-lg bg-transparent text-emerald-400 ring-2 ring-emerald-400 hover:scale-y-110">
                    <a className="py-2 grow hover:scale-y-90" href='https://apatel.xyz/resume.pdf' target='_blank' rel='noopener noreferrer'>Resume</a>
                </button>
                <button className="flex rounded-lg bg-transparent text-emerald-400 ring-2 ring-emerald-400 hover:scale-y-110">
                    <a className="py-2 grow hover:scale-y-90" href='https://www.linkedin.com/in/aditya-patel52/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                </button>
            </div>
        </>
    )
}
