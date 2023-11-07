import { useInView } from 'react-intersection-observer';

const Projects = () => {

    const [ref1, inView1] = useInView({
        triggerOnce: true,
        
      });
    
      const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.2, 
      });
    
      const [ref3, inView3] = useInView({
        triggerOnce: true,
        threshold: 0.2, 
      });
    
      const [ref4, inView4] = useInView({
        triggerOnce: true,
        threshold: 0.2, 
      });


    return (
        <section id="projects"  className={` w-full xl:w-[90%] flex flex-col items-center mx-auto mt-52 `}>
            <h1 className="text-2xl text-[#00ffffb9] font-semibold">PROJECTS</h1>
            {/* First card */}
            <div ref={ref1} className={`bg-[#121212] project mt-10 shadow p-5 rounded-2xl max-w-[90%] xl:h-[29rem] xl:max-w-[1200px] xl:flex mx-auto ${inView1 ? 'visible' : ''}`}>

                <div className={`project-image-container xl:min-w-[550px] rounded-lg h-[25rem]  mx-auto xl:h-auto`}>
                    <div className="overlay bg-[#121212] opacity-20 hover:opacity-0 w-full h-full"></div>
                </div>
                    
                <div className="flex flex-col md:ml-6">
                    <h1 className="mt-5 font-semibold text-xl">Car Rental</h1>
                    <p className="mt-5 text-lg text-gray-400"> 
                        This project is a template for a car rental website, showcasing the 
                        integration of various technologies and functionalities. Users can register
                        and log in using Firebase authentication, browse available cars, view car 
                        details, and make reservations. The site is responsive with a sleek and modern design.
                        It's a fully functional web application 
                        designed to serve as a starting point for real-world projects.
                    </p>
                    
                        <ul className="text-gray-300 xl:justify-start flex flex-wrap gap-5 mt-5 justify-center font-semibold">
                            <li>React</li>
                            <li>TypeScript</li>
                            <li>Tailwind CSS</li>
                            <li>Firebase</li>
                        </ul>
                    
                    <div className="flex gap-8 py-2 mt-3 justify-center ">
                        <a className="visit-site" href="https://davids-car-rental.netlify.app" target="_blank">
                            Visit Site <span>&rarr;</span>
                        </a>

                        <a href="https://github.com/Drayved/Car-Rental-Site" title="View Source Code" target="_blank">
                            <img className="w-8 mt-1 hover:scale-110" src="./images/github.svg"  title="View Source Code" alt="GitHub" />
                        </a>
                    </div>
                
                </div>
            </div>

            {/* Second card */}
            <div ref={ref2} className={`bg-[#121212] project mt-10 shadow p-5 rounded-2xl max-w-[90%] xl:h-[29rem] xl:max-w-[1200px] xl:flex mx-auto ${inView2 ? 'visible' : ''}`}>

            <div className={`project-image-container-2 xl:min-w-[550px] rounded-lg h-[25rem] order-2 mx-auto xl:h-auto`}>
                    <div className="overlay bg-[#121212] opacity-20 hover:opacity-0 w-full h-full"></div>
            </div>
                
            <div className="flex flex-col md:ml-6 order-1">
                <h1 className="mt-5 font-semibold text-xl">GameSaver</h1>
                <p className="mt-5 text-lg text-gray-400"> 
                    An app to find games you want to play or games you've played and keep track of them in 2 different list.
                    Utlizes the RAWG API for all game data.
                    Users are able to create an account and access their list on any device. Utlizies firebase
                    to keep track of the users and their specifc list. Fun design that fits perfectly on any screen without needing
                    to scroll. Uses a serverless function to hide API key.
                </p>
                
                    <ul className="text-gray-300 xl:justify-start flex flex-wrap gap-5 mt-5 justify-center font-semibold">
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>Tailwind CSS</li>
                        <li>Firebase</li>
                    </ul>
                
                <div className="flex gap-8 py-2 mt-3 justify-center ">
                    <a className="visit-site" href="https://davids-gamesaver.netlify.app" target="_blank">
                        Visit Site <span>&rarr;</span>
                    </a>

                    <a href="https://github.com/Drayved/GameSaver" title="View Source Code" target="_blank">
                        <img className="w-8 mt-1 hover:scale-110" src="./images/github.svg"  title="View Source Code" alt="GitHub" />
                    </a>
                </div>

                </div>


            </div>

            {/* Third card */}

            <div ref={ref3} className={`bg-[#121212] project mt-10 shadow p-5 rounded-2xl max-w-[90%] xl:h-[29rem] xl:max-w-[1200px] xl:flex mx-auto ${inView3 ? 'visible' : ''}`}>

                <div className={`project-image-container-3 xl:min-w-[550px] rounded-lg h-[25rem]  mx-auto xl:h-auto`}>
                    <div className="overlay bg-[#121212] opacity-20 hover:opacity-0 w-full h-full"></div>
                </div>
                    
                <div className="flex flex-col md:ml-6">
                    <h1 className="mt-5 font-semibold text-xl">Tint Site</h1>
                    <p className="mt-5 text-lg text-gray-400"> 
                        Tint Site is a web application created as a pitch for a tinting 
                        business. Although it was not ultimately used by the intended owner 
                        due to franchise requirements, the site showcases a professional 
                        and visually appealing design. This project was to enhance my 
                        skills with Responsive Design, Form Submission, and Google Maps 
                        Integration. Form is connected to a Google spreadsheet, so all customer information is neatly organized.
                        Modern design that would enhance any business. 
                    </p>
                    
                        <ul className="text-gray-300 xl:justify-start flex flex-wrap gap-5 mt-5 justify-center font-semibold">
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>Tailwind CSS</li>
                            <li>Google Maps API</li>
                        </ul>
                    
                    <div className="flex gap-8 py-2 mt-3 justify-center ">
                        <a className="visit-site" href="https://davids-tint-site.netlify.app/" target="_blank">
                            Visit Site <span>&rarr;</span>
                        </a>

                        <a href="https://github.com/Drayved/Tint-Site" title="View Source Code" target="_blank">
                            <img className="w-8 mt-1 hover:scale-110" src="./images/github.svg"  title="View Source Code" alt="GitHub" />
                        </a>
                    </div>

                </div>
            </div>

            {/* fourth card */}

            <div ref={ref4} className={`bg-[#121212] project mt-10 shadow p-5 rounded-2xl max-w-[90%] xl:h-[29rem] xl:max-w-[1200px] xl:flex mx-auto ${inView4 ? 'visible' : ''}`}>
            
            <div className={`project-image-container-4 xl:min-w-[550px] rounded-lg  h-[25rem] order-2  mx-auto xl:h-auto`}>
                <div className="overlay bg-[#121212] opacity-20 hover:opacity-0 w-full h-full"></div>
            </div>

        
                <div className="flex flex-col  md:ml-6 order-1">
                    <h1 className="mt-5 font-semibold text-xl">SkyFall</h1>
                    <p className="mt-5 text-lg text-gray-400"> 
                    Team project that we built during a voyage with Chingu. Team consisted of 3 developers and a
                    designer.
                    Pulls meteorite strike data from a Nasa API. Search by name, year, mass, or composition.
                    Displays results in a spreadsheet format, which you can then look at the geolocation or charts of
                    all the returned meteorite data.
                    My part was to create the landing page, fetch component and the map component, including any
                    and all designs and data filtering that came with that.
                    The team used the Agile/Scrum method, Tailwind, React, Javascript, and Figma
                    </p>
                    
                        <ul className="text-gray-300 xl:justify-start flex flex-wrap gap-5 mt-5 justify-center font-semibold">
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>Tailwind CSS</li>
                            <li>Nasa Meteorite API</li>
                        </ul>
                    
                    <div className="flex gap-8 py-2 mt-3 justify-center ">
                        <a className="visit-site " href="https://team27-skyfall.netlify.app/" target="_blank">
                            Visit Site <span>&rarr;</span>
                        </a>

                        <a href="https://github.com/chingu-voyages/v45-tier2-team-27" title="View Source Code" target="_blank">
                            <img className="w-8 mt-1 hover:scale-110" src="./images/github.svg"  title="View Source Code" alt="GitHub" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects