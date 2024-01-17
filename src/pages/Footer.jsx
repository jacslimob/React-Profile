export default function Footer() {
    return (
        <footer className='bg-blue-800 fixed bottom-0 w-full'>


            <div className="m-4 flex justify-evenly social-icons text-white">
                <a className="hover:underline" href="https://www.linkedin.com/in/jacob-maughan-355835218/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
                <a className="hover:underline" href="https://github.com/jacslimob" target="_blank" rel="noopener noreferrer">
                    Github
                </a>
            </div>
            <center className="text-white mb-4">
                Thank you for checking out my page!
            </center>
        </footer>
    )
}