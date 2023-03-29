import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavBar from "./navbar/Navbar";
import Carousel from "./carousel/Carousel";

interface LayoutProps {
  children?: React.ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
  <>
  <div className='bg-main text-white'>
  <NavBar />
  {children}
  <Carousel/>

  </div>
  </>
  );
  };
  
  export default Layout;