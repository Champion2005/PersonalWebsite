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

const ProjectCard = ({ name, description, link=null }) => {
    return (
        <div className='bg-white/50 rounded-lg shadow-lg shadow-emerald-700 backdrop-blur-sm hover:backdrop-blur-none hover:shadow-xl hover:shadow-emerald-600 hover:scale-105 p-2 text-black/75'>
            <div className='relative flex justify-between'>
            <h3 className='text-xl font-bold'><a href={link} target="_blank"><u>{name}</u></a></h3>
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

                <div className='w-full lg:w-6/12 2xl:w-4/12 grid grid-cols-1 lg:grid-cols-2 justify-items-stretch gap-5 px-5 py-10 self-center w-full'>
                    {myProjects.map(project => (
                        <ProjectCard name={project.name} description={project.description} link={project.link} />
                    ))}
                </div>
            </section>
        </>
    )
}
