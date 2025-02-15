/**
 * Footer component displaying the copyright message with the current year.
 * 
 * @returns {JSX.Element} The footer JSX structure containing the copyright message.
 */
import { FaLinkedin, FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <div id="footer" className="relative z-50 bottom-0 w-full bg-slate-950 flex flex-col items-center py-6 text-amber-100">
            
            <div className="flex space-x-6 mb-4">
                <a href="https://www.linkedin.com/company/temsmet2025-nitdelhi/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-300 transition duration-300">
                    <FaLinkedin size={24} />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-300 transition duration-300">
                    <FaFacebook size={24} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-300 transition duration-300">
                    <FaInstagram size={24} />
                </a>
            </div>

            <div className="flex flex-col items-center space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                    <FaEnvelope size={20} className="text-sky-300" />
                    <span className="text-base">contact@ieee.org</span>

                    <span className="hidden sm:block border-l-2 border-sky-300 h-6"></span>

                    <FaPhone size={20} className="text-sky-300" />
                    <span className="text-base">+1 (234) 567-890</span>
                </div>
            </div>

            <span className="text-sm sm:text-base md:text-lg lg:text-xl text-center">
                &copy; 2025 IEEE – All rights reserved.
            </span>
        </div>
    );
}

export default Footer;