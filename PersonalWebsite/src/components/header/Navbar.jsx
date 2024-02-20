export const Navbar = () => {

    return (
        <>
            <div className="p-5 grid grid-cols-3 justify-evenly gap-3">
                <button className="flex rounded-lg bg-emerald-600 border-2 border-white/50 hover:bg-teal-500 hover:scale-[1.01]">
                    <a className="py-2 grow" href='https://github.com/Champion2005' target='_blank' rel='noopener noreferrer'>Github</a>
                </button>
                <button className="flex rounded-lg bg-emerald-600 border-2 border-white/50 hover:bg-teal-500 hover:scale-[1.01]">
                    <a className="py-2 grow" href='https://apatel.xyz/resume.pdf' target='_blank' rel='noopener noreferrer'>Resume</a>
                </button>
                <button className="flex rounded-lg bg-emerald-600 border-2 border-white/50 hover:bg-teal-500 hover:scale-[1.01]">
                    <a className="py-2 grow" href='https://www.linkedin.com/in/aditya-patel52/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                </button>
            </div>
        </>
    )
}
