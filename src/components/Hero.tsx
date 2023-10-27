

const Hero = () => {
    return (
        <section className="flex flex-wrap flex-col md:items-center justify-center mt-28 md:mt-80 w-[99%] mx-auto">
            <div className=" md:flex">
                <div className="image-container flex justify-center my-10">
                    <div className="border-container ">
                        <img className="image w-96 md:-mt-16 md:w-80 rounded-full  " src="/images/my-pic.jpg" alt="" />
                    </div>
                    
                </div>
                <div className="ml-10">
                    <h1 className="text-cyan-600 font-semibold">Hi, my name is</h1>
                    <h1 className="text-5xl mt-2 font-semibold">David Riley</h1>
                    <h2 className="text-5xl mt-2 text-gray-400 font-semibold">Front-End Developer</h2>
                    <p className="max-w-20 md:w-96 mt-4 text-gray-500 flex">
                        I transform web designs into seamless, user-friendly experiences.
                        Let's create something remarkable together.
                    </p>

                    <div className="flex gap-5 mt-5">
                        <a className="hover:scale-110" href="https://www.linkedin.com/in/david-riley-dev/">
                            <img className="w-8" src="/images/linkedin.svg" alt="" />
                        </a>
                        <a className="hover:scale-110" href="https://github.com/Drayved">
                            <img className="w-8" src="/images/github.svg" alt="" />
                        </a>
                    </div>
                </div>


            </div>
           
            <div className="flex flex-col md:flex-row mt-16 flex-wrap px-10 mx-auto">
                <h4 className="flex mx-auto mt-2 text-lg font-bold pl-4 pr-5 border-b pb-1 mb-4 md:border-none md:pb-0 md:mb-0">Tech Stack <span className="text-xl -mt-0.5 ml-4 hidden md:flex">|</span></h4>
                <div className="flex flex-wrap justify-start gap-2">
                    <div className="image-container">
                        <img className="hover:scale-110" src="/images/html.png" alt="HTML" />
                        <div className="tag">HTML</div>
                    </div>

                    <div className="image-container">
                        <img className="hover:scale-110" src="/images/css.png" alt="CSS" />
                        <div className="tag">CSS</div>
                    </div>

                    <div className="image-container">
                        <img className="hover:scale-110" src="/images/javascript.png" alt="JavaScript" />
                        <div className="tag">JavaScript</div>
                    </div>

                    <div className="image-container">
                        <img className="hover:scale-110" src="/images/typescript.png" alt="TypeScript" />
                        <div className="tag">TypeScript</div>
                    </div>

                    <div className="image-container">
                        <img className="w-12 hover:scale-110" src="/images/react.png" alt="React" />
                        <div className="tag">React</div>
                    </div>

                    <div className="image-container">
                        <img className="hover:scale-110" src="/images/tailwind.png" alt="Tailwind CSS" />
                        <div className="tag">Tailwind</div>
                    </div>

                    <div className="image-container">
                        <img className="hover:scale-110" src="/images/vite.png" alt="Vite" />
                        <div className="tag">Vite</div>
                    </div>

                    <div className="image-container">
                        <img className="hover:scale-110" src="/images/firebase.png" alt="Firebase" />
                        <div className="tag">Firebase</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
