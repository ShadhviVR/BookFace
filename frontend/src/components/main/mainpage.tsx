import React from "react"
import Nav from "../user/Nav/nav";
import Carousel from "./carousel/Carousel";

interface LayoutProps {
  children?: React.ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
  <>
  <div className='bg-main text-white bg-gray-20'>
  <Nav />
  {children}
  <Carousel/>

  </div>
  </>
  );
  };
  
  export default Layout;