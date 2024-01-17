import project1 from '../images/binary-banter.png';
import project2 from '../images/jate.png';
// Import other project images

export default function Portfolio() {
    return (
        <section id="Projects" className="my-10">

            <h2 className='text-4xl'>Projects</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                {/* project container */}
                <div className="project-container m-4 relative">

                    <img src={project1} alt="Best project" className="w-full h-auto" />
                    <div className="opacity-0 hover:opacity-90 transition-opacity absolute hover:bg-black inset-0 flex justify-evenly items-center">


                        <div className="links text-white">
                            <a href="https://github.com/jacslimob/Tech-Blog" target="_blank" rel="noopener noreferrer" className="underline">MVC Code</a>
                        </div>
                        <div className="links text-white">
                            <a href='https://binary-banter-d37d20a0ee35.herokuapp.com/' target='_blank' rel='noopener noreferrer' className="underline">Deployed App</a>
                        </div>
                    </div>

                </div>

                <div className="project-container m-4 relative">

                    <img src={project2} alt="PWA project" className="w-full h-auto" />
                    <div className="overlay absolute inset-0 flex justify-center items-center">

                        <div className="links text-white text-center">
                            <a href="https://github.com/jacslimob/JATE-pwa" target="_blank" rel="noopener noreferrer" className="underline">PWA Code</a>
                        </div>
                        <div className="links text-white text-center">
                            <a href='https://pwa-m19-4e3aa0da2cea.herokuapp.com/' target='_blank' rel='noopener noreferrer' className="underline">Deployed App</a>
                        </div>
                    </div>

                </div>

                {/* Add similar blocks for other projects */}

            </div>

        </section>
    );
}
