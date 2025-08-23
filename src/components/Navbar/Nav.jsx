import React, { useEffect, useState } from "react";
import { Menu, X, ChevronUp, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  navigation,
  cfpSubmenuItems,
  pastEditionsItems,
  travelItems,
} from "./menuItems";

/**
 * Smoothly scrolls to a section on the page identified by the provided ID.
 * @param {string} id - The ID of the target section.
 */
const scrollToSection = (id) => {
  const timer = setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      window.scroll({
        top: window.scrollY + rect.top,
        behavior: "smooth",
      });
    }
  }, 0);
};

/**
 * SubMenu component for rendering submenu items.
 * @param {Object} props - Component props.
 * @param {Array<Object>} props.items - List of submenu items.
 * @param {Function} [props.onClose] - Callback function to handle submenu closure.
 * @returns {JSX.Element} The submenu JSX structure.
 */
const SubMenu = ({ items, onClose }) => (
  <div className="relative bg-slate-950 text-white rounded-md">
    <div className=" bg-slate-900/80 rounded-md absolute right-0 overflow-hidden max-w-[90vw]">
      <ul className="flex flex-col space-y-1 p-2">
        {items.map((item, index) => (
          <Link key={index} to={item.href} target={item.current}>
            <li
              key={index}
              className="p-1 text-white hover:bg-slate-950/90 whitespace-nowrap"
              onClick={(e) => {
                if (item.name === "Important Dates") scrollToSection(item.name);
                onClose && onClose();
                // if (item.name === "Travel Visa") { e.preventDefault(); alert("Comimg Soon!!!!") };
              }}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  </div>
);

const MobileSubMenu = ({ items, onClose }) => (
  <div className=" bg-slate-950 text-white rounded-md">
    <div className="bg-slate-900/80 rounded-md bg-slate-900/80flex flex-col justify-center items-center w-screen">
      <ul className="flex flex-col space-y-1 p-2">
        {items.map((item, index) => (
          <Link to={item.href} target={item.current}>
            <li
              key={index}
              className="p-1 text-white hover:bg-slate-950/90 whitespace-nowrap text-center"
              onClick={() => {
                if (item.name === "Important Dates") scrollToSection(item.name);
                onClose && onClose();
              }}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  </div>
);

/**
 * Main navigation component.
 * @param {Object} props - Component props.
 * @param {Function} props.setShowContact - Function to toggle the contact modal.
 * @returns {JSX.Element} The navigation JSX structure.
 */
function Nav({ setShowContact, linkActive, setLinkActive, children }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [subMenuStates, setSubMenuStates] = useState({});

  // Reset mobile menu and submenu states when the route changes.
  useEffect(() => {
    setMobileMenu(false);
    setSubMenuStates({});
  }, [location.pathname]);

  /**
   * Closes all submenus when the user clicks outside the navigation area.
   */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".submenu, nav")) {
        setSubMenuStates({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /**
   * Toggles the specified submenu while ensuring all others are closed.
   * @param {string} key - The key of the submenu to toggle.
   */
  const toggleSubMenu = (key) => {
    setSubMenuStates({ [key]: !subMenuStates[key] });
  };

  const navigate = useNavigate();

  return (
    <>
      <nav className="w-full z-50">
        <div className="relative bg-slate-950 border-b-4 border-zinc-950 text-white z-50">
          <div className="flex w-full justify-center items-center py-3 md:py-5">
            <div className="visible ml-4 flex items-center justify-center font-bold text-xl md:text-2xl lg:text-3xl">
              <p>TEMSMET2025</p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center items-center w-full ">
              <ul className="flex text-sm flex-wrap justify-end lg:text-base w-full gap-[0.7rem] lg:gap-3 mr-5">
                {/* <ul className="hidden xl:flex w-full flex-wrap font-mono text-lg font-bold justify-start 2xl:justify-around items-center"> */}
                {navigation.map((navItem, index) => (
                  <li
                    key={index}
                    className={`hover:text-slate-200 cursor-pointer submenu ${
                      navItem.index === linkActive
                        ? "text-zinc-50"
                        : "text-sky-300"
                    }`}
                    onMouseEnter={() => {
                      if (navItem.name === "Call for Papers")
                        toggleSubMenu("cfp");
                      if (navItem.name === "Past Editions")
                        toggleSubMenu("pastEditions");
                      if (navItem.name === "Travel") toggleSubMenu("travel");
                    }}
                    onMouseLeave={() => {
                      if (navItem.name === "Call for Papers")
                        toggleSubMenu("cfp");
                      if (navItem.name === "Past Editions")
                        toggleSubMenu("pastEditions");
                      if (navItem.name === "Travel") toggleSubMenu("travel");
                    }}
                    onClick={(e) => {
                      if (navItem.name == "Contact") {
                        scrollToSection("footer");
                      }
                    }}
                  >
                    <Link to={navItem.href !== undefined && navItem.href}>
                      <span className="flex justify-center items-center relative">
                        {navItem.name}
                        {navItem.name === "Call for Papers" &&
                          (subMenuStates.cfp ? <ChevronUp /> : <ChevronDown />)}
                        {navItem.name === "Hackathon" && (
                          <img src="/new.png" alt="New" className="h-8 w-8 absolute -left-4 -top-5" />
                        )}
                        {navItem.name === "Past Editions" &&
                          (subMenuStates.pastEditions ? (
                            <ChevronUp />
                          ) : (
                            <ChevronDown />
                          ))}
                        {navItem.name === "Travel" &&
                          (subMenuStates.travel ? (
                            <ChevronUp />
                          ) : (
                            <ChevronDown />
                          ))}
                      </span>
                    </Link>
                    {navItem.name === "Call for Papers" &&
                      subMenuStates.cfp && <SubMenu items={cfpSubmenuItems} />}
                    {navItem.name === "Past Editions" &&
                      subMenuStates.pastEditions && (
                        <SubMenu items={pastEditionsItems} />
                      )}
                    {navItem.name === "Travel" && subMenuStates.travel && (
                      <SubMenu items={travelItems} />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Navigation */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden absolute right-5 top-3"
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>

          {mobileMenu && (
            <ul className="flex flex-col items-center justify-center space-y-2 py-5 font-bold text-lg text-slate-300 xl:hidden">
              {navigation.map((navItem, index) => (
                <li
                  key={index}
                  className="hover:text-slate-50 cursor-pointer submenu "
                  onClick={() => {
                    if (navItem.name === "Call for Papers")
                      toggleSubMenu("cfp");
                    if (navItem.name === "Past Editions")
                      toggleSubMenu("pastEditions");
                    if (navItem.name === "Travel") toggleSubMenu("travel");
                    if (navItem.name === "Contact") contactClickHandle(true);
                  }}
                >
                  <Link to={navItem.href}>
                    <span className="flex items-center justify-center relative">
                      {navItem.name}
                      {navItem.name === "Call for Papers" &&
                        (subMenuStates.cfp ? <ChevronUp /> : <ChevronDown />)}
                      {navItem.name === "Hackathon" && (
                        <img src="/new.png" alt="New" className="h-8 w-8 absolute -left-4 -top-5" />
                      )}
                      {navItem.name === "Past Editions" &&
                        (subMenuStates.pastEditions ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        ))}
                      {navItem.name === "Travel" &&
                        (subMenuStates.travel ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        ))}
                    </span>
                  </Link>
                  {navItem.name === "Call for Papers" && subMenuStates.cfp && (
                    <MobileSubMenu
                      items={cfpSubmenuItems}
                      onClose={() => setMobileMenu(false)}
                    />
                  )}
                  {navItem.name === "Past Editions" &&
                    subMenuStates.pastEditions && (
                      <MobileSubMenu
                        items={pastEditionsItems}
                        onClose={() => setMobileMenu(false)}
                      />
                    )}
                  {navItem.name === "Travel" && subMenuStates.travel && (
                    <MobileSubMenu
                      items={travelItems}
                      onClose={() => setMobileMenu(false)}
                    />
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
      {children}
    </>
  );
}

export default Nav;
