import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { navLinks } from "../constants";

const NavItems = () => {
  return(
    <ul className="nav-ul">
      {navLinks.map(({name,id,href}) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a" onClick={() => {}}>{name}</a>
        </li>
      ))}
    </ul>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prevIsOpen) => (!prevIsOpen))

  return (
    <header className='z-50 bg-black/90 fixed left-0 right-0 top-0'>
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
            <a href="/" className="font-dm text-neutral-400 font-bold text-xl hover:text-white transition-colors">
              Nuruddin
            </a>

            <button className="hover:text-white text-neutral-400 focus:outline-none sm:hidden" aria-label="Toggle menu" onClick={toggle}>
            {isOpen ? <IoClose className="w-6 h-6"/> : <IoMenu className="w-6 h-6"/>}
            </button>

            <nav className="sm:flex hidden">
              <NavItems/>
            </nav>
        </div>
      </div>

        <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
          <nav className="p-5">
              <NavItems/>
          </nav>
        </div>
      
    </header>
  )
}

export default Navbar
