import github from '../images/github-64.png'

const ProjectCard = ({ imgSrc, githubLink, deployedLink }) => {
    return (
        <div className="m-4 relative">
            <img src={imgSrc} alt="Project" className="object-cover h-48 w-full" />
            <div className="opacity-0 hover:opacity-90 absolute hover:bg-slate-500 inset-0 flex justify-evenly items-center">
                <div>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        <img className='hover:w-20 hover:drop-shadow-2xl' src={github} alt='Code' />
                    </a>
                </div>
                <div className="text-white">
                    <a href={deployedLink} target='_blank' rel='noopener noreferrer' className="hover:underline hover:text-xl">Deployed App</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
