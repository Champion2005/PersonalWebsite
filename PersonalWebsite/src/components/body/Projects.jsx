const myProjects = [
    {
        name: 'Remora',
        link: 'https://github.com/Champion2005/Remora',
        description: 'Remora is an interpreted programming language created in Python.'
    },
    {
        name: 'EcoWatch',
        link: 'https://github.com/jwlebert/EcoWatch',
        description: 'EcoWatch is a social networking app with a focus on inspiring community oriented environmental activism.'
    },
]

const comingSoon = [
    {
        name: 'BDGTX',
        link: 'https://apatel.xyz/bdgtx',
        description: 'BDGTX is a all-in-one budget tool to help plan out expenses, investments and savings.'
    },
    {
        name: 'Blackjack Teacher',
        link: 'https://apatel.xyz/blackjack',
        description: 'Blackjack Teacher is an interactive and engaging platform to learn statistically correct play, fast.'
    },
    {
        name: 'Remora (Compiled)',
        link: '',
        description: 'A compiler for Remora written in Rust.'
    },
    {
        name: 'Operating System?',
        link: '',
        description: 'Name undecided. Hope to potentially make a custom OS in Rust.'
    },
]

const ProjectCard = ({ name, description, link }) => {
    return (
        <div className='bg-white/50 rounded-lg shadow-lg shadow-emerald-700 hover:shadow-xl hover:shadow-emerald-600 p-2 text-black/75'>
            <div className='relative flex justify-between'>
                {
                    link.length ?
                        <h3 className='text-xl font-bold'><a href={link} target="_blank"><u>{name}</u></a></h3>
                        : <h3 className='text-xl font-bold'>{name}</h3>
                }
            </div>
            <p className='text-sm font-mono'>{description}</p>
        </div>
    )
}


export const Projects = () => {

    return (
        <>
            <section className='flex flex-col select-none mt-20 2xl:mt-32 py-10 relative after:absolute after:inset-0 after:-skew-y-3 after:-z-10 after:bg-gradient-to-br after:from-emerald-800 after:to-emerald-500 after:border-y-4 after:border-white/50'>
                <h2 className="pt-5 text-center text-black/75 text-4xl font-bold">Projects</h2>

                <div className='w-full lg:w-6/12 2xl:w-4/12 grid grid-cols-1 lg:grid-cols-2 justify-items-stretch gap-5 px-5 py-10 self-center'>
                    {myProjects.map((project, index) => (
                        <ProjectCard key={index} name={project.name} description={project.description} link={project.link} />
                    ))}
                </div>

                <p className="pt-5 text-center text-black/75 text-2xl font-bold">🚧 Coming Soon 🚧</p>

                <div className='w-full lg:w-6/12 2xl:w-4/12 grid grid-cols-1 lg:grid-cols-2 justify-items-stretch gap-5 px-5 py-10 self-center'>
                    {comingSoon.map(project => (
                        <ProjectCard name={project.name} description={project.description} link={project.link} />
                    ))}
                </div>
            </section>
        </>
    )
}
