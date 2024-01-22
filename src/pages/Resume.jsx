import resume from '../assets/resume.pdf';

export default function Resume() {
    return (

        < section className='mb-32'>
            <center className='text-4xl m-8'>Skills</center>
            <div className='grid grid-cols-2'>
                <div className=''>
                    <center className='underline text-2xl'>Technical</center>
                    <center>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>NODE.js</li>
                        <li>MySql</li>
                        <li>React</li>
                        <li>Mongo</li>
                    </center>
                </div>
                <div className=''>
                    <center className='underline text-2xl'>Other</center>
                    <center>
                        <li>Quick Learner</li>
                        <li>Great Communicator</li>
                        <li>Responsible</li>
                        <li>Adaptable</li>
                    </center>
                </div>
            </div>
            <center className='mt-8'><a href={resume} download="Jacob_Maughan_Resume.pdf">
                <button className='bg-blue-600 p-2 text-white hover:text-blue-600 hover:bg-sky-400 rounded-full'>Download Resume</button>
            </a></center>
        </section >

    )
}