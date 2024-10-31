import React, {useState} from 'react'
import { Menu, X, ChevronUp, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import {navigation, aboutSubmenuItems, cfpSubmenuItems, pastEditionsItems} from './menuItems'

function createSubMenu(subMenuItems) {
  const subMenu = <div className="z-50 absolute bg-slate-900/80 rounded-md">
    <ul >
    {subMenuItems.map((item, index) => (
      <li key={index} className='p-3 text-white hover:bg-slate-950/90'>
        <Link to={item.href}>
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
  </div>
  return subMenu;
}

function createMobileSubMenu(subMenuItems) {
  const mobileSubMenu = <div className="origin-center bg-slate-900/80 rounded-md flex flex-col justify-center items-center">
    <ul >
    {subMenuItems.map((items, index) => (
      <li key = {index} className='p-3 text-white hover:bg-slate-950/90'>{ items.name }</li>
    ))}
  </ul>
  </div>
  return mobileSubMenu;
}

function Nav(){
  const [mobileMenu, setMobileMenu] = useState(false);
  const [aboutSubMenu, setAboutSubMenu] = useState(false);
  const [cfpSubMenu, setCFPSubMenu] = useState(false);
  const [editionsSubMenu, setEditionsSubMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }
  const handleAboutSubMenu = () => {
    setAboutSubMenu(!aboutSubMenu);
  }
  const handleCFPSubMenu = () => {
    setCFPSubMenu(!cfpSubMenu);
  }
  const handleEditionsSubMenu = () => {
    setEditionsSubMenu(!editionsSubMenu)
  }

  return (
    <nav className='fixed z-50 w-full'>
      <div className="relative bg-fixed bg-slate-950 text-white lg:flex justify-between z-49">
        <div className='font-bold flex justify-center items-center text-2xl mx-5 p-5 md:text-xl'>
        TEMSMET2025
      </div>
      
      <ul className='hidden lg:flex justify-center items-center mr-5 transition-all ease-in-out '>
        {navigation.map((navItem, index) => (
          <li key={index} className="text-slate-300 hover:text-slate-50 cursor-pointer  md:text-sm p-2"
            onMouseEnter={() => {
              (navItem.name === 'About') && handleAboutSubMenu();
              (navItem.name === 'Call for Papers') && handleCFPSubMenu();
              (navItem.name === 'Past Editions') && handleEditionsSubMenu();
              }
            }
            onMouseLeave={() => {
              (navItem.name === 'About') && handleAboutSubMenu();
              (navItem.name === 'Call for Papers') && handleCFPSubMenu();
              (navItem.name === 'Past Editions') && handleEditionsSubMenu();
            }
            }
          >
            <Link to={navItem.href}>
              <span className='flex'>
              {navItem.name} {(navItem.name === 'About') ? (!aboutSubMenu ? <ChevronDown  /> : <ChevronUp />) : ""}
              {(navItem.name === 'Call for Papers') ? (!cfpSubMenu ? <ChevronDown  /> : <ChevronUp  />) : ""}
              {(navItem.name == 'Past Editions') ? (!editionsSubMenu ? <ChevronDown  /> : <ChevronUp  />) : ""}
              </span>
            </Link>


            {navItem.name === 'About' && aboutSubMenu && createSubMenu(aboutSubmenuItems)}
            {navItem.name === 'Call for Papers' && cfpSubMenu && createSubMenu(cfpSubmenuItems)}
            {navItem.name === 'Past Editions' && editionsSubMenu && createSubMenu(pastEditionsItems)}
            

          </li>
        ))}
        
      </ul>
      {/* mobile menu toggle button */}
      <button onClick={handleMobileMenu} id="mobile-menu" className="lg:hidden absolute right-5 top-5">
        {!mobileMenu ? <Menu/> : <X/>}
      </button>
      {mobileMenu &&
          <ul className='   flex flex-col justify-center items-center mr-5 space-y-2 py-5 font-bold text-lg hover:text-white transition-all duration-300 ease-in-out transform lg:hidden' >
            {navigation.map((navItem, index) => (
              <li key={index}
                className="text-slate-300 hover:text-slate-50 cursor-pointer font-semibold  px-2 hover"
                onClick={() => {
                  navItem.name === 'About' && handleAboutSubMenu();
                  navItem.name === 'Call for Papers' && handleCFPSubMenu();
                  navItem.name === 'Past Editions' && handleEditionsSubMenu();
                 }}
              >
              <span className='flex'>
                {navItem.name} {(navItem.name === 'About') ? (!aboutSubMenu ? <ChevronDown /> : <ChevronUp />) : ""}
                {(navItem.name === 'Call for Papers') ? (!cfpSubMenu ? <ChevronDown /> : <ChevronUp />) : ""}
                {(navItem.name == 'Past Editions') ? (!editionsSubMenu ? <ChevronDown /> : <ChevronUp />) : ""}
              </span>
                {navItem.name === 'About' && aboutSubMenu && createMobileSubMenu(aboutSubmenuItems)}
                {navItem.name === 'Call for Papers' && cfpSubMenu && createMobileSubMenu(cfpSubmenuItems)}
                {navItem.name === 'Past Editions' && editionsSubMenu && createMobileSubMenu(pastEditionsItems)}
              </li>
            ))}
        
          </ul>}
      </div>
      
        
    </nav>
    )
  
}
export default Nav;