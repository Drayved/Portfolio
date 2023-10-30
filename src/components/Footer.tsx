
const Footer = ( ) => {

    return(
        <div className="py-10 mt-32 border-t">
            <div className="flex pl-10 justify-between lg:w-[80%] lg:mx-auto">
                <p className="flex flex-col">Built and Designed by<span>David Riley</span> </p>
                <div className="flex gap-6 pr-10">
                        <a className="hover:scale-110" href="https://www.linkedin.com/in/david-riley-dev/">
                            <img className="w-8" src="/images/linkedin.svg" alt="" />
                        </a>
                        <a className="hover:scale-110" href="https://github.com/Drayved">
                            <img className="w-8" src="/images/github.svg" alt="" />
                        </a>
                    </div>
            </div>
        </div>
    )
}

export default Footer