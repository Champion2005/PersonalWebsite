export const Navbar = () => {

    return (
        <>
            <div className="p-5 flex justify-around gap-1 sticky top-0">
                <button className="py-2 rounded-lg bg-red-500 hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                    <a className="py-2 px-8" href='https://github.com/Champion2005' target='_blank' rel='noopener noreferrer'>Github</a>
                </button>
                <button className="py-2 rounded-lg bg-red-500 hover:bg-yellow-500">
                    <a className="py-2 px-8" href='https://apatel.xyz/resume.pdf' target='_blank' rel='noopener noreferrer'>Resume</a>
                </button>
                <button className="py-2 rounded-lg bg-red-500 hover:bg-gradient-to-r from-yellow-500 to-orange-500">
                    <a className="py-2 mx-8" href='https://www.linkedin.com/in/aditya-patel52/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                </button>
            </div>
        </>
    )
}
