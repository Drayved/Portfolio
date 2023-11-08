
const Footer = ( ) => {

    return(
        <footer className=" py-10 mt-32 border-t">
            <div className="flex flex-col items-center sm:flex-row sm:justify-between lg:w-[85%] lg:mx-auto">
                <p className="flex flex-col">Built and Designed by<span className="text-center sm:text-left">David Riley</span> </p>
                <a className="my-8 sm:my-0 border py-3 px-12 btn-hover font-semibold text-lg" href="https://drive.google.com/file/d/1ZZPKJepZDTfVRfCDmZXqAHmIHjBFGEjO/view?usp=sharing" target="_blank">Resume</a>
                <div className="flex gap-6 sm:pr-10 ">
                        <a className="hover:scale-110" href="https://www.linkedin.com/in/david-riley-dev/" target="_blank">
                            <img className="w-8" src="/images/linkedin.svg" alt="" />
                        </a>
                        <a className="hover:scale-110" href="https://github.com/Drayved" target="_blank">
                            <img className="w-8" src="/images/github.svg" alt="" />
                        </a>
                    </div>
            </div>
        </footer>
    )
}

export default Footer