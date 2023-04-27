import React, { useState } from 'react';
import Button from './Button';
import Logo from "../../../assets/logo.png";

interface NavBarProps {}

  const NavBar: React.FC<NavBarProps> = () => {
    const hover: string = "hover:text-subMain transitions text-white";
  
    const Hover = ({ isActive }: { isActive: boolean }): string =>
      isActive ? "text-subMain" : hover;
  
  const [] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-gray-20 py-4 md:px-10 px-7'>
      <div className="relative flex flex-col items-start justify-between">
        <img src={Logo} alt="" className="w-56 h-12 "/>
      </div>
      </div>
    </div>
  );
};

export default NavBar;
