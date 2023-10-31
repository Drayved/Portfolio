import { useEffect, useState } from "react";

const Nav = () => {
    const [showMenu, setShowMenu] = useState(window.innerWidth >= 1024);
    const [showScrollButton, setShowScrollButton] = useState(false)

    const scrollToSection = (event: React.MouseEvent, sectionId: string) => {
        event.preventDefault();
        const section = document.querySelector(sectionId);
        if (section) {
          section.scrollIntoView({
            behavior: 'smooth',
          });
        }
      };

    useEffect(() => {
        const handleResize = () => {
          setShowMenu(window.innerWidth >= 1024)
        };

        const handleScroll = () => {
            setShowScrollButton(window.scrollY > 200)
          };
    
        window.addEventListener("resize", handleResize)
        window.addEventListener("scroll", handleScroll)
    
        return () => {
          window.removeEventListener("resize", handleResize)
          window.removeEventListener("scroll", handleScroll)
        };
      }, []);

      const toggleMenu = () => {
        setShowMenu(!showMenu)

        if (!showMenu) {
            document.body.classList.add("no-scroll");
          } else {
            document.body.classList.remove("no-scroll");
          }
    }

    const navElements = (
        <ul className={`p-6 font-semibold  ${window.innerWidth < 1024 ? 'flex-col flex gap-10 mb-10 text-2xl' : 'flex flex-row gap-6 text-lg'}`}>
          <li className="cursor-pointer hover:text-cyan-500">
            <a href="#home" onClick={() => window.scrollTo({top: 0, behavior: 'smooth',})}>Home</a>
        </li>
          <li className="cursor-pointer hover:text-cyan-500">
            <a href="#about" onClick={(e) => scrollToSection(e, "#about")}>About</a>
        </li>
          <li className="cursor-pointer hover:text-cyan-500">
            <a href="#projects" onClick={(e) => scrollToSection(e, "#projects")}>Projects</a>
        </li>
          <li className="cursor-pointer hover:text-cyan-500">
            <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>Contact</a>
        </li>
        </ul>
      );

    return(
        <header id="home" className="flex justify-between border-b">
            <a href="mailto:David.Riley.Dev@gmail.com" className="p-6 font-bold text-gray-100 sm:text-lg hover:text-cyan-500 cursor-pointer text-sm">
                David.Riley.Dev@gmail.com
            </a>
            
            {showScrollButton && (
                        <div className="fixed top-6 right-9 mr-10 z-50">
                            <div className={`menu-btn ${showMenu ? "active" : ""}`} onClick={toggleMenu}>
                                <div className="menu-btn-burger"></div>
                            </div>
                        </div>
                    )}
                    
            {window.innerWidth < 1024 ? (
                <>
                    <div className="absolute top-6 right-9 mr-10 z-50">
                        <div className={`menu-btn ${showMenu ? "active" : ""}`} onClick={toggleMenu}>
                            <div className="menu-btn-burger"></div>
                        </div>
                    </div>

                    <div onClick={toggleMenu} className={`${showMenu ? "active" : ""}`}>
                        <div className="sliding-menu fixed right-0 flex justify-center items-center w-screen h-screen bg-[#121212] z-40">
                            {navElements}
                        </div>
                    </div>
                </>
            ) : (
                <div>
                    {navElements}
                </div>
            )}
            
        </header>
    )
}

export default Nav