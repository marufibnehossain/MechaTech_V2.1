import React from 'react';
import { Link } from 'react-router-dom';
import Navbtn from '../Shared/Navbtn';
import Names from '../Data/Names';
import { RiMenu3Fill } from 'react-icons/ri';

function NavbarBtn(nam){
  return <Navbtn key={nam.id} name={nam.name} />
}

const Navbar = ({ setIsOpen }) => {
  return (
    <div>
      <nav className="text-left xl:px-10 md:px-8 4xs:px-5 h-20 sm:h-24 fixed z-40 top-0 left-0 w-full p-4 bg-white flex items-center justify-between shadow-[0_0_5px_0_rgba(0,0,0,0.1)]">
        <Link href="#title" className="text-gray-800 text-xl font-bold">Mechatech</Link>

        <div className='flex items-center'>
          <div className="md:mx-8 lg:mx-12 md:block hidden">
            <ul className="navbar-nav flex capitalize">
              {Names.map(NavbarBtn)}
            </ul>
          </div>
          <RiMenu3Fill className="md:hidden block lg:text-3xl 4xs:text-2xl" type="button"  onClick={() => setIsOpen(true)} />
        </div>
      </nav>

    </div>
  )
}

export default Navbar;