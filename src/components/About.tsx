import { useInView } from 'react-intersection-observer';

const About = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
      });

    return(
        <section id='about' ref={ref} className={`section flex flex-col lg:flex-row mt-60 md:mt-[35rem] items-center justify-center w-[90%] max-w-[1150px] mx-auto ${inView ? 'visible' : ''}`}>
            <div className="lg:max-w-[500px] mx-auto text-lg">
                <h1 className="text-2xl font-semibold text-[#00ffffb9] text-center">ABOUT ME</h1>
                <p className="mt-5 text-gray-400">
                    Hello! My name is David and I am a
                    Front-End Developer from Kentucky. I enjoy crafting intuitive 
                    and responsive web experiences with React.
                </p>
                <p className="mt-5 text-gray-400">
                    As a skilled problem-solver with a background in technical support, 
                    I am dedicated to bringing my passion for learning and technology to the field 
                    of front-end development. I am committed to creating websites that are both 
                    useful and visually appealing, with a strong focus on delivering a positive user 
                    experience. My top priority is to ensure that every website I develop is easy to 
                    use and navigate, providing users with an enjoyable experience.
                </p>
            </div>
            <div className="mt-12 lg:ml-5 ml-0 flex justify-center w-full mx-auto">
                <img className="w-[100%] lg:h-[320px] lg:max-w-[500px] " src="/images/computer.jpg" alt="" />
            </div>
        </section>
    )
}

export default About