import resume from '../assets/resume.pdf';

export default function Resume() {
    return (

        < section className='mb-32'>
            <center className='text-4xl m-8 font-semibold'>Skills</center>
            <div className='flex justify-center'>
                <div className='grid grid-cols-2 w-1/2'>
                    <div className='text-center'>
                        <div className='underline text-2xl'>Technical</div>
                        <div>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>NODE.js</li>
                            <li>MySql</li>
                            <li>React</li>
                            <li>Mongo</li>
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className='underline text-2xl'>Additional</div>
                        <div>
                            <li>Quick Learner</li>
                            <li>Great Communicator</li>
                            <li>Responsible</li>
                            <li>Adaptable</li>
                        </div>
                    </div>
                </div>
            </div>
            <center className='mt-8'><a href={resume} download="Jacob_Maughan_Resume.pdf">
                <button className='bg-blue-600 p-2 text-white hover:text-blue-600 hover:bg-sky-400 rounded'>Download Resume</button>
            </a></center>
        </section >

    )
}