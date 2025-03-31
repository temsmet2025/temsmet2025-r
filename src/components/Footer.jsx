import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
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
const Footer = () => {
  return (
    <footer className=" bg-black text-white p-3 lg:p-10 w-[100vw]">
        <div className="flex justify-center items-center">
            <div className="flex flex-col gap-10 lg:grid lg:grid-flow-row lg:grid-cols-4 lg:gap-10 w-full">
            
                <div className="text-left lg:col-span-2 xl:col-span-1 hidden lg:block text-xs sm:text-base">
                    <nav className="flex flex-col gap-3 text-base text-gray-400">
                        <Link to="/call-for-papers" className="hover:text-white">Track1 - Innovations in Power Engineering</Link>
                        <Link to="/call-for-papers" className="hover:text-white">Track2 - AI, ML and Cyber Security</Link>
                        <Link to="/call-for-papers" className="hover:text-white">Track3 - Smart Systems and Communication</Link>
                        <Link to="/call-for-papers" className="hover:text-white">Track4 - Engineering and Smart Management</Link>
                        <Link to="/call-for-papers" className="hover:text-white">Track5 - Advancements in VLSI, Embedded systems and Signal Processing</Link>
                        <Link to="/call-for-papers" className="hover:text-white">Track6 - Innovations and Entrepreneurship</Link>
                    </nav>
                </div>

                <div className="flex flex-col gap-1 items-center justify-center lg:col-span-1 xl:col-span-2">
                      <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold flex flex-row"><span>TESMET</span> <span>2025</span> </h1>
                      <div className="flex flex-row flex-wrap justify-center items-center text-xs sm:text-base gap-1 text-gray-400 sm:font-semibold">
                          <Link to="/submission-guidelines" className="hover:text-white">Submission Guidelines  </Link> 
                          <span>|</span>
                          <Link to="/" onClick={(e) => {
                              scrollToSection("Important Dates");
                          }} className="hover:text-white">Important Dates</Link> 
                          <span>|</span>
                          <Link to="/venue&directions" className="hover:text-white">Venue & Direction</Link>
                          <span>|</span>
                        <Link to="/explore-delhi" className="hover:text-white">Explore Delhi</Link>
                      </div>
                </div>

                <div className="ml-10 flex flex-col justify-center items-center">
                    <h2 className="text-lg font-bold">NEW DELHI</h2>
                      <div className="text-gray-400 flex flex-col justify-center items-center">
                    <span>Zone P1, GT Karnal Road</span>
                    <span>Bakoli, 110036</span>
                    <span>+11-33861122/83</span>
                    <span>temsmet2025@nitdelhi.ac.in</span>
                    </div>
                
                </div>
            </div>
        </div>

      <div className="text-center mt-10 text-gray-400">
        ©2025 IEEE - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
