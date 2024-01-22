import github from '../images/github-64.png';
import linkedin from '../images/linkedin-48.png';
import stack from '../images/stackoverflow.png';

export default function Footer() {
    return (
        <footer className='bg-blue-800 fixed bottom-0 w-full'>


            <div className="mt-4 flex md:justify-center justify-between social-icons text-white">
                <a className="" href="https://www.linkedin.com/in/jacob-maughan-355835218/" target="_blank" rel="noopener noreferrer">
                    <img className='hover:ring ring-inset' src={linkedin} alt='LinkedIn icon' />
                </a>
                <a className="w-12 h-12 mx-4" href="https://github.com/jacslimob" target="_blank" rel="noopener noreferrer">
                    <img className='hover:ring ring-inset' src={github} alt='GitHub icon' />
                </a>
                <a className='w-12 h-12' href='https://stackoverflow.com/users/23278570/jacob-maughan' target='_blank' rel='noopener noreferrer'>
                    <img className='hover:ring ring-inset' src={stack} alt='Stackoverflow icon' />
                </a>
            </div>
            <center className="text-white mb-4">
                Thank you for checking out my page!
            </center>
        </footer>
    )
}