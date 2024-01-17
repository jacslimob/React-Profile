import resume from '../assets/resume.pdf';

export default function Resume() {
    return (

        < section >
            <center className='text-4xl m-8'>Skills</center>
            <div className='grid grid-cols-2'>
                <div className=''>
                    <center>Technical</center>
                    <ol>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>NODE.js</li>
                    </ol>
                </div>
                <div className=''>
                    <center className=''>Other</center>
                    <ol>
                        <li></li>
                    </ol>
                </div>
            </div>
            <center><a href={resume} download="Jacob_Maughan_Resume.pdf">
                Download Resume
            </a></center>
        </section >

    )
}