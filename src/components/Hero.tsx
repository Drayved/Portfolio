

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-52 ">
            <div className=" md:flex">
                <div>
                    <h1 className="gray-600 font-semibold">Hi, my name is</h1>
                    <h1 className="text-5xl mt-2 font-semibold">David Riley</h1>
                    <h2 className="text-5xl mt-2 text-gray-400 font-semibold">Front-End Developer</h2>
                    <p className="w-96 mt-4 text-gray-500">
                        I transform web designs into seamless, user-friendly experiences.
                        Let's create something remarkable together.
                    </p>

                    <div className="flex gap-5 mt-5">
                        <a  href="https://www.linkedin.com/in/david-riley-dev/">
                            <img className="w-8" src="/images/linkedin.svg" alt="" />
                        </a>
                        <a href="https://github.com/Drayved">
                            <img className="w-8" src="/images/github.svg" alt="" />
                        </a>
                    </div>
                </div>

                <div>
                    <img className="w-96 rounded-full h-96 ml-20" src="/images/davids-pic.jpg" alt="" />
                </div>
            </div>
           
            <div className="flex mt-16">
                <h4 className="mt-2 text-lg font-bold pr-5">Tech Stack <span className="text-xl ml-4">|</span></h4>
                <div className="flex gap-2">
                    <img src="/images/html.png" alt="" />
                    <img src="/images/css.png" alt="" />
                    <img src="/images/javascript.png" alt="" />
                    <img src="/images/typescript.png" alt="" />
                    <img className="w-12" src="/images/react.png" alt="" />
                    <img src="/images/tailwind.png" alt="" />
                    <img src="/images/vite.png" alt="" />
                    <img src="/images/firebase.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
