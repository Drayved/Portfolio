

const About = () => {

    return(
        <div className="flex flex-col md:flex-row mt-96 items-center justify-center mx-auto">
            <div className="max-w-[500px] mx-auto">
                <h1 className="text-xl font-semibold">ABOUT ME</h1>
                <p className="mt-5">
                    Hello! My name is David and I am a
                    Front-End Developer from Kentucky. I enjoy crafting intuitive 
                    and responsive web experiences with React.
                </p>
                <p className="mt-5">
                    As a skilled problem-solver with a background in technical support, 
                    I am dedicated to bringing my passion for learning and technology to the field 
                    of front-end development. I am committed to creating websites that are both 
                    useful and visually appealing, with a strong focus on delivering a positive user 
                    experience. My top priority is to ensure that every website I develop is easy to 
                    use and navigate, providing users with an enjoyable experience.
                </p>
            </div>
            <div className="mt-12 flex justify-center w-full mx-auto">
                <img className="w-[100%] md:max-w-[500px] " src="/images/computer.jpg" alt="" />
            </div>
        </div>
    )
}

export default About