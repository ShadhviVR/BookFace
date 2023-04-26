import React from "react"
import Nav from "../user/Nav/nav";
import Search  from "./search/search";
import Combine from "./posts/combine";

interface LayoutProps {
  children?: React.ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
  <>
  <div className='bg-main text-white bg-gray-20'>
  <Nav />
  {children}
<br/> <br/> <br/> <br/>
  <Search/> 
  <Combine/>
  </div>

  </>
  );
  };
  
  export default Layout;