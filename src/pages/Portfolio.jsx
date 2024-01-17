import project1 from '../images/binary-banter.png'
import project2 from '../images/jate.png'
import project3 from '../images/pro3.jpeg'
import project4 from '../images/pro4.jpeg'
import project5 from '../images/pro5.jpeg'

export default function Portfolio() {
    return (
        <section id="Projects">

            <h2 className='text-4xl my-10'>Projects</h2>

            <div className='columns-3 m-4'>
                {/* project container */}
                <div className="project-container m-4">

                    <img src={project1} alt="best project" />
                    <div className="overlay justify-evenly">

                        <div className="links">

                            <a href="https://github.com/jacslimob/Tech-Blog" target="_blank" rel="noopener noreferrer">MVC Code</a>


                        </div>
                        <div className="links">
                            <a href='https://binary-banter-d37d20a0ee35.herokuapp.com/' target='_blank' rel='noopener noreferrer'>Deployed App</a>
                        </div>
                    </div>

                </div>

                <div className="project-container m-4">

                    <img src={project2} alt="PWA project" />
                    <div className="overlay justify-evenly">

                        <div className="links">

                            <a href="https://github.com/jacslimob/JATE-pwa" target="_blank" rel="noopener noreferrer">PWA Code</a>


                        </div>
                        <div className="links">
                            <a href='https://pwa-m19-4e3aa0da2cea.herokuapp.com/' target='_blank' rel='noopener noreferrer'>Deployed App</a>
                        </div>
                    </div>

                </div>



            </div>

        </section>
    )
}