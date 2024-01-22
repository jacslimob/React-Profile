import project1 from '../images/binary-banter.png';
import project2 from '../images/jate.png';
import project3 from '../images/work-scheduler.png';
import project4 from '../images/starmapper.jpg';
import project5 from '../images/moneymagnet.png';
import project6 from '../images/IntelliStock.jpeg';

import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        imgSrc: project1,
        githubLink: 'https://github.com/jacslimob/Tech-Blog',
        deployedLink: 'https://binary-banter-d37d20a0ee35.herokuapp.com/',
    },
    {
        imgSrc: project2,
        githubLink: 'https://github.com/jacslimob/JATE-pwa',
        deployedLink: 'https://pwa-m19-4e3aa0da2cea.herokuapp.com/',
    },
    {
        imgSrc: project3,
        githubLink: 'https://github.com/jacslimob/Work-Day-Scheduler',
        deployedLink: 'https://jacslimob.github.io/Work-Day-Scheduler/',
    },
    {
        imgSrc: project4,
        githubLink: 'https://github.com/Newtron21/Starmapper',
        deployedLink: 'https://newtron21.github.io/Starmapper/',
    },
    {
        imgSrc: project5,
        githubLink: 'https://github.com/MrPolkadot/notyomamasfinances',
        deployedLink: 'https://moneymagnet.up.railway.app/',
    },
    {
        imgSrc: project6,
        githubLink: 'https://github.com/akidd15/IntelliStock',
        deployedLink: 'https://github.com/akidd15/intellistock.git',
    },
];

export default function Portfolio() {
    return (
        <section id="Projects" className="mt-10 mb-32">
            <center className='text-4xl underline'>Projects</center>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}


