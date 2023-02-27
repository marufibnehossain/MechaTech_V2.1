import React from "react";
import { RxCross2 } from "react-icons/rx";
import Navbtn from "./Navbtn";
import Names from "./Names";

function NavbarBtn(nam){
    return <Navbtn key={nam.id} name={nam.name} />
  }
  

function Drawer({ isOpen, setIsOpen }) {
  return (
    <div className={"fixed overflow-hidden md:hidden block z-10 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen ? " transition-opacity opacity-100 duration-500 translate-x-0  " : " transition-all delay-500 opacity-0 translate-x-full")}>
      
      <section className={"sm:max-w-xs w-full right-0 absolute bg-white h-auto sm:h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")}>
      
        <div className="w-full p-5 px-4 flex justify-end"><RxCross2 className="text-[#26A5E2] text-4xl xl:mx-9 md:mx-8 mx-5" onClick={() => {setIsOpen(false);}} /></div>

        <div className="p-0 mt-0">
          <ul className="mx-9 my-10 sm:my-8 lg:text-lg sm:text-lg text-base capitalize font-normal text-zinc-400 font-avreg">
            {Names.map(NavbarBtn)}
          </ul>
        </div>

      </section>
      <section className=" w-screen h-auto cursor-pointer " onClick={() => {setIsOpen(false);}}></section>
    </div>
  );
}

export default Drawer;