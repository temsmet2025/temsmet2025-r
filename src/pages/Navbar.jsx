import React from "react"
import Nav from "../components/Navbar/Nav";
import PreNav from "../components/PreNav";
const Navbar = () => {
    return (
        <div className="sticky top-0 z-50">
            <PreNav></PreNav>
            <Nav/>
       </div>
    )
}
export default Navbar;