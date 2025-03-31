import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        
        <div className="w-1/2 text-left">
          <nav className="flex flex-col space-y-2">
            <a href="#" className="hover:text-gray-400">Track1 - Innovations in Power Engineering</a>
            <a href="#" className="hover:text-gray-400">Track2 - AI, ML and Cyber Security</a>
            <a href="#" className="hover:text-gray-400">Track3 - Smart Systems and Communication</a>
            <a href="#" className="hover:text-gray-400">Track4 - Engineering and Smart Management</a>
            <a href="#" className="hover:text-gray-400">Track5 - Advancements in VLSI, Embedded systems and Signal Processing</a>
            <a href="#" className="hover:text-gray-400">Track6 - Innovations and Entrepreneurship</a>
          </nav>
        </div>

        <div className="w-1/2 text-right">
          <h2 className="text-lg font-bold">NEW DELHI</h2>
          <p>Zone P1, GT Karnal Road</p>
          <p>Bakoli, 110036</p>
          <p>+11-33861122/83</p>
          <p>temsmet2025@nitdelhi.ac.in</p>
          <div className="flex justify-end space-x-4 mt-4">
            <a href="https://www.facebook.com" className="text-white hover:text-gray-400"><FaFacebookF /></a>
            <a href="https:www.instagram.com" className="text-white hover:text-gray-400"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/temsmet2025-nitdelhi" className="text-white hover:text-gray-400"><FaLinkedin /></a>
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
