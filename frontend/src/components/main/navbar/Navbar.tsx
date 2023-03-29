import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSearch,FaHeart } from "react-icons/fa";
import { CgUser } from "react-icons/cg";
import Logo from "../../../assets/logo.png";


interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const hover: string = "hover:text-primary-200 transitions text-white";

  const Hover = ({ isActive }: { isActive: boolean }): string =>
    isActive ? "text-subMain" : hover;

  return (
    <>
      <div className="bg-main shadow-md sticky top-0 z-20">
        <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
          {/*Logo*/}
          <div className="col-span-1 lg:block hidden">
            <Link to="/">
              <img
                src={Logo}
                alt="logo"
                className="w-full h-16 object-contain"
              />
            </Link>
          </div>
          {/* search Form */}
          <div className="col-span-3">
            <form className="w-full text-sm bg-dryGray rounded flex-btn gap-4">
              <button
                type="submit"
                className="bg-subMain w-12 flex-colo h-12 rounded text-white"
              >
                <FaSearch />
              </button>
              <input
                type="text"
                placeholder="Search"
                className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black"
              />
            </form>
          </div>
          {/*menus*/}
          <div className="col-span-3 font-medium text-sm hidden xl:gap-10 2xl:gap-15 justify-between lg:flex xl:justify-end items-center">
            <NavLink to="/movies" className={Hover}>
              Movies
            </NavLink>
            <NavLink to="/about-us" className={Hover}>
              About Us
            </NavLink>
            <NavLink to="/contact-us" className={Hover}>
              Contact Us
            </NavLink>
            <NavLink to="/login" className={Hover}>
              <CgUser className="w-8 h-8" />
            </NavLink>
            <NavLink to="/favorite" className={'${Hover} relative'}>
              <FaHeart className="w-4 h-4" />
              <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1">
                2
              </div>
            </NavLink>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
