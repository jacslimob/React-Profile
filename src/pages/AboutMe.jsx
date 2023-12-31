import pic from '../images/family.jpeg'


export default function AboutMe() {
    return (
        <section className="flex justify-center mt-20">
            <div className="ml-10">
                <img src={pic} alt="Picture of family" className="float-left"/>
            </div>
            <div className="ml-10">
                <h2 className="text-4xl text-blue-800">About Me</h2>
            
                <p className="w-3/4 justify-center my-20">
                    I'm Jacob Maughan, an aspiring web developer currently pursuing a Full-Stack Development certificate from the University of Utah. Proficient in HTML, CSS, JavaScript, Node.js, MySql, and React, I am dedicated to mastering the art of web development. My goal is to contribute innovative solutions and create seamless user experiences that exceed expectations. Equipped with a solid foundation from my program, I'm excited to collaborate on projects that challenge and inspire. Let's connect and explore the vast world of web development together!
                </p>
            </div>
            
        </section>
    )
}
