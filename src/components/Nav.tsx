import { useEffect, useState } from "react";

const Nav = () => {
  const [showMenuSmall, setShowMenuSmall] = useState(window.innerWidth >= 1024);
  const [showMenu, setShowMenu] = useState(false)
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToSection = (sectionId: string) => {
    
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setShowMenuSmall(window.innerWidth >= 1024);
    };

    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = (e: React.MouseEvent) => {
    const isNavButton = e.target instanceof Element && e.target.closest(".nav-btn");
    const isMenuButton = e.target instanceof Element && e.target.closest(".menu-btn");
  
    if (isNavButton || isMenuButton) {
      setShowMenuSmall(!showMenuSmall);
      setShowMenu(!showMenu);
  
      if (!showMenu) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    }

    e.stopPropagation();
  };

  const navElements = (
    <ul 
      className={`p-6 font-semibold  
        ${showMenuSmall || showMenu 
        ? 'flex flex-row gap-6 text-lg' 
        : 'hidden'} 
        ${window.innerWidth < 1024 || showMenu ? 'flex-col flex gap-10 mb-10 text-2xl' : ''}`}>
      <li className="nav-btn cursor-pointer hover:text-cyan-500">
        <a href="#home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Home
        </a>
      </li>
      <li className="nav-btn cursor-pointer hover:text-cyan-500">
        <a href="#about" onClick={() => scrollToSection("#about")}>
          About
        </a>
      </li>
      <li className="nav-btn cursor-pointer hover:text-cyan-500">
        <a href="#projects" onClick={() => scrollToSection("#projects")}>
          Projects
        </a>
      </li>
      <li className="nav-btn cursor-pointer hover:text-cyan-500">
        <a href="#contact" onClick={() => scrollToSection("#contact")}>
          Contact
        </a>
      </li>
      <li className="nav-btn cursor-pointer hover:text-cyan-500">
        <a 
          href="https://docs.google.com/document/d/1K-TI-o4oTf1njuind_5i-n4trzjysyPxSXZN1UVnSz4/edit?usp=sharing" 
          target="_blank"
        >
          Resume
        </a>
      </li>
    </ul>
  );

  return (
    <header id="home" className="flex justify-between border-b">
      <a href="mailto:David.Riley.Dev@gmail.com" className="p-6 font-bold text-gray-100 sm:text-lg  cursor-pointer text-sm">
        <div className="flex">
          <div className="logo-img hover:scale-105">
            <img className="w-8 mr-3 border rounded-full p-1 shadow shadow-white " src="/images/logo.jpg" alt="" />
            <div className="email-tag sm:hidden">Email</div>
          </div>
          <div className="flex text-lg hover:text-cyan-500">
            <p className="hidden sm:flex">David.Riley.Dev@gmail.com</p>
          </div>
        </div>
        
      </a>

      {showScrollButton && (
        <>
       <div className="fixed top-6 right-4 mr-10 z-50">
            <div className={`menu-btn  ${showMenu ? "active" : ""}`} onClick={toggleMenu}>
              <div className="menu-btn-burger"></div>
            </div>
          </div>

          <div onClick={toggleMenu} className={`${showMenu ? "active" : ""}`}>
            <div className={`sliding-menu ${showMenu ? "fixed" : "absolute"} right-0 flex justify-center items-center w-screen h-screen bg-[#121212] z-40`}>
              <p>{navElements}</p>
            </div>
          </div>
        
      </>
      )}

      {window.innerWidth < 1024 ? (
        <>
          <div className="absolute top-6 right-4 mr-10 z-50">
            <div className={`menu-btn ${showMenuSmall ? "active" : ""}`} onClick={toggleMenu}>
              <div className="menu-btn-burger"></div>
            </div>
          </div>

          <div onClick={toggleMenu} className={`${showMenuSmall ? "active" : ""}`}>
            <div className={`sliding-menu ${showMenuSmall ? "fixed" : "absolute"} right-0 flex justify-center items-center w-screen h-screen bg-[#121212] z-40`}>
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
  );
};

export default Nav;
