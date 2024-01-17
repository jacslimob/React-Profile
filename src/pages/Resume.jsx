import resume from '../assets/resume.pdf';

export default function Resume() {
    return (

        < section >
            <center className='text-4xl m-8'>Skills</center>
            <div className='grid grid-cols-2'>
                <div className=''>
                    <center className='underline text-2xl'>Technical</center>
                    <center>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>NODE.js</li>
                    </center>
                </div>
                <div className=''>
                    <center className='underline text-2xl'>Other</center>
                    <ol>
                        <li></li>
                    </ol>
                </div>
            </div>
            <center className='mt-8'><a href={resume} download="Jacob_Maughan_Resume.pdf">
                <button className='bg-blue-600 p-2 text-white hover:text-blue-600 hover:bg-sky-400 rounded-full'>Download Resume</button>
            </a></center>
        </section >

    )
}