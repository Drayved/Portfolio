import { useEffect, useState } from "react";

const Nav = () => {
    const [showMenu, setShowMenu] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
          setShowMenu(window.innerWidth >= 1024);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

      const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const navElements = (
        <ul className={`p-6 font-semibold  ${window.innerWidth < 1024 ? 'flex-col flex gap-10 mb-10 text-2xl' : 'flex flex-row gap-6 text-lg'}`}>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      );

    return(
        <header className="flex justify-between border-b">
            <h3 className="p-6 font-bold text-gray-100 text-lg">David.Riley.Dev@gmail.com</h3>
            {window.innerWidth < 1024 ? (
                <>
                    <div className="absolute top-6 right-9 mr-10 z-50">
                        <div className={`menu-btn ${showMenu ? "active" : ""}`} onClick={toggleMenu}>
                            <div className="menu-btn-burger"></div>
                        </div>
                    </div>

                    <div onClick={toggleMenu} className={`${showMenu ? "active" : ""}`}>
                        <div className="sliding-menu absolute right-0 flex justify-center items-center w-screen h-screen bg-[#121212] z-40">
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