import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronUp, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navigation, aboutSubmenuItems, cfpSubmenuItems, pastEditionsItems } from './menuItems';

/**
 * Creates the dropdown submenu for the provided list of submenu items.
 * 
 * @param {Array<Object>} subMenuItems - List of submenu items.
 * @returns {JSX.Element} The submenu JSX structure.
 */
function createSubMenu(subMenuItems) {
  const subMenu = (
    <div className="z-50 absolute bg-slate-900/80 rounded-md">
      <ul>
        {subMenuItems.map((item, index) => (
          <li key={index} className='p-3 text-white hover:bg-slate-950/90'>
            <Link to={item.href} target={item.current}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
  return subMenu;
}

/**
 * Creates the mobile dropdown submenu for the provided list of submenu items.
 * 
 * @param {Array<Object>} subMenuItems - List of submenu items.
 * @returns {JSX.Element} The mobile submenu JSX structure.
 */
function createMobileSubMenu(subMenuItems) {
  const mobileSubMenu = (
    <div className="origin-center bg-slate-900/80 rounded-md flex flex-col justify-center items-center">
      <ul>
        {subMenuItems.map((item, index) => (
          <li key={index} className='p-3 text-white hover:bg-slate-950/90'>
            <Link to={item.href} target={item.current}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
  return mobileSubMenu;
}

/**
 * Main navigation component.
 * Contains a responsive navigation menu with dropdown submenus for desktop and mobile.
 * 
 * @returns {JSX.Element} The navigation JSX structure.
 */
function Nav() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [aboutSubMenu, setAboutSubMenu] = useState(false);
  const [cfpSubMenu, setCFPSubMenu] = useState(false);
  const [editionsSubMenu, setEditionsSubMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenu(false);
    setAboutSubMenu(false);
    setCFPSubMenu(false);
    setEditionsSubMenu(false);
  }, [location.pathname]);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const handleAboutSubMenu = () => {
    setAboutSubMenu(!aboutSubMenu);
  };
  const handleCFPSubMenu = () => {
    setCFPSubMenu(!cfpSubMenu);
  };
  const handleEditionsSubMenu = () => {
    setEditionsSubMenu(!editionsSubMenu);
  };

  return (
    <nav className='sticky top-0 z-50 w-full'>
      <div className="relative bg-fixed bg-slate-950 text-white lg:flex justify-between z-49">
        <div className='font-extrabold  w-48 text-2xl  p-5 md:text-3xl'>
          {/* <img src="./logos/IEEE TEMS logo/17-TA-213 TEMS logo RGB_bg_removed.png" className='w-48 hover:scale-105 cursor-pointer' alt="Temsmet 2025" /> */}
          <p>TEMSMET2025</p>
        </div>

        <ul className='hidden lg:visible text-base font-bold lg:flex justify-center items-center mr-3 transition-all duration-500 ease-in-out'>
          {navigation.map((navItem, index) => (
            <li
              key={index}
              className="text-white hover:text-slate-200 cursor-pointer ml-3"
              onMouseEnter={() => {
                // if (navItem.name === 'About') handleAboutSubMenu();
                if (navItem.name === 'Call for Papers') handleCFPSubMenu();
                if (navItem.name === 'Past Editions') handleEditionsSubMenu();
              }}
              onMouseLeave={() => {
                // if (navItem.name === 'About') handleAboutSubMenu();
                if (navItem.name === 'Call for Papers') handleCFPSubMenu();
                if (navItem.name === 'Past Editions') handleEditionsSubMenu();
              }}
            >
              <Link to={navItem.href}>
                <span className='flex justify-center items-center'>
                  {navItem.name}
                  {/* {navItem.name === 'About' && (aboutSubMenu ? <ChevronUp /> : <ChevronDown />)} */}
                  {navItem.name === 'Call for Papers' && (cfpSubMenu ? <ChevronUp /> : <ChevronDown />)}
                  {navItem.name === 'Past Editions' && (editionsSubMenu ? <ChevronUp /> : <ChevronDown />)}
                </span>
              </Link>

              {/* {navItem.name === 'About' && aboutSubMenu && createSubMenu(aboutSubmenuItems)} */}
              {navItem.name === 'Call for Papers' && cfpSubMenu && createSubMenu(cfpSubmenuItems)}
              {navItem.name === 'Past Editions' && editionsSubMenu && createSubMenu(pastEditionsItems)}
            </li>
          ))}
        </ul>

        <button onClick={handleMobileMenu} id="mobile-menu" className="lg:hidden absolute right-5 top-5">
          {!mobileMenu ? <Menu /> : <X />}
        </button>

        {mobileMenu && (
          <ul className='flex flex-col justify-center items-center space-y-2 py-5 font-bold text-lg hover:text-white transition-all duration-700 ease-in-out lg:hidden'>
            {navigation.map((navItem, index) => (
              <li
                key={index}
                className="text-slate-300 hover:text-slate-50 cursor-pointer font-semibold px-2 hover  w-full"
                onClick={() => {
                  // if (navItem.name === 'About') handleAboutSubMenu();
                  if (navItem.name === 'Call for Papers') handleCFPSubMenu();
                  if (navItem.name === 'Past Editions') handleEditionsSubMenu();
                }}
              >
                <Link to={navItem.href}>
                  <span className='flex justify-center items-center'>
                    {navItem.name}
                    {/* {navItem.name === 'About' && (aboutSubMenu ? <ChevronUp /> : <ChevronDown />)} */}
                    {navItem.name === 'Call for Papers' && (cfpSubMenu ? <ChevronUp /> : <ChevronDown />)}
                    {navItem.name === 'Past Editions' && (editionsSubMenu ? <ChevronUp /> : <ChevronDown />)}
                  </span>
                </Link>

                {/* {navItem.name === 'About' && aboutSubMenu && createMobileSubMenu(aboutSubmenuItems)} */}
                {navItem.name === 'Call for Papers' && cfpSubMenu && createMobileSubMenu(cfpSubmenuItems)}
                {navItem.name === 'Past Editions' && editionsSubMenu && createMobileSubMenu(pastEditionsItems)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Nav;
