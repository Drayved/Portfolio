

const Projects = () => {

    return (
        <section className="w-full xl:w-[90%] flex flex-col items-center mx-auto mt-52">
            <h1 className="text-2xl font-semibold">PROJECTS</h1>

            <div className="mt-10 shadow p-5 rounded-2xl  max-w-[90%] xl:max-w-[1120px] lg:flex mx-auto">

            <div className={`project-image-container lg:min-w-[550px]  h-[25rem]  mx-auto lg:h-auto`}>
                <div className="overlay bg-[#121212] opacity-30 hover:opacity-20 w-full h-full">

                </div>
            </div>
                
                <div className="flex flex-col md:ml-6">
                    <h1 className="mt-5 font-semibold text-xl">GAMESAVER</h1>
                    <p className="mt-5 text-lg text-gray-400"> 
                        An app to find games you want to play or games you've played and keep track of them in 2 different list.
                        Users are able to create an account and access their list on any device. Utlizies firebase database
                        to keep track of the users and their specifc list. Uses a serverless function to hide API key.
                    </p>
                    
                        <ul className="text-gray-300 lg:justify-start flex flex-wrap gap-5 mt-5 justify-center font-semibold">
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>Tailwind CSS</li>
                            <li>Firebase</li>
                        </ul>
                    
                    <div className="flex gap-8 py-2 mt-3 justify-center ">
                        <a className="mt-1" href="https://davids-gamesaver.netlify.app" target="_blank">
                            Visit Site <span>&rarr;</span>
                        </a>

                        <a href="https://github.com/Drayved/GameSaver" title="View Source Code" target="_blank">
                            <img className="w-8" src="./images/github.svg"  title="View Source Code" alt="GitHub" />
                        </a>
                </div>
                
              </div>
            </div>
        </section>
    )
}

export default Projects