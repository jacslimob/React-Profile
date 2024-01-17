export default function Footer() {
    return (
        <footer className='bg-blue-800 fixed bottom-0 w-full'>
            <h2>Jacob Maughan</h2>
            <p>
                Thank you for checking out my page!
            </p>
            <div className="social-icons mt-4">
                <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
                    {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
                </a>
                <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-lg"></i>
                </a>
            </div>
        </footer>
    )
}