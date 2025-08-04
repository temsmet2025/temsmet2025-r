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
    <footer id="footer" className=" bg-black text-white w-full">
      <div className="flex flex-wrap justify-around w-full p-3 lg:p-10 gap-10">
          <div className="flex flex-col gap-5 w-full sm:w-auto">
            <div className="flex gap-3">
                <img src="./logos/nit-logo/NIT-Delhi_Logo.png" className="aspect-square h-24 w-24" alt="temsmet2025 NIT-DELHI" />
                <div className="flex flex-col justify-center items-start">
                  <span className="text-sky-400 text-2xl font-bold">TEMSMET 2025</span>
                  <span className="text-gray-400">Hosted by NIT Delhi</span>
                </div>
            </div>
            <div className="flex flex-col gap-3 text-gray-400">
              <div className="flex flex-col">
                <span>International Conference on Trends in </span> 
                <span>Engineering, Management, Science, and </span>
                <span>Technology.</span>
              </div>
              <span>October 08-10, 2025</span>
            </div>
          </div>
          <div className="flex flex-col gap-7 text-slate-300 w-full sm:w-auto">
            <h1 className="text-3xl font-bold text-slate-200">
              Quick Links
            </h1>
            <nav className="flex flex-col gap-2">
              <Link to="/call-for-papers" className="hover:text-white">Conference Tracks</Link> 
              <Link to="/submission-guidelines" className="hover:text-white">Submission Guidelines  </Link> 
              <Link to="/" onClick={(e) => {
                  scrollToSection("Important Dates");
              }} className="hover:text-white">Important Dates</Link> 
              <Link to="/registration" className="hover:text-white">Registration</Link>
              <Link to="/venue&directions" className="hover:text-white">Venue & Direction</Link>
              <Link to="/explore-delhi" className="hover:text-white">Explore Delhi</Link>
            </nav>
          </div>
        <address className="flex flex-col items-start gap-6 text-gray-400 w-full sm:w-auto">
            <h1 className="text-3xl font-bold text-slate-200">Get In Touch</h1>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-5 h-5 mr-2 mt-0.5 shrink-0 text-primary text-sky-400"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <div className="flex flex-col">
                    <span>National Institute of Technology, Delhi,</span>
                    <span>Zone P1, GT Karnal Road, Bakoli</span>
                    <span>New Delhi-110036</span>
                  </div>
                </div>
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-5 h-5 mr-2 shrink-0 text-primary text-sky-400"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                <span>temsmet2025@nitdelhi.ac.in</span>
              </div>
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-5 h-5 mr-2 shrink-0 text-primary text-sky-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>+11-33861122/83</span>  
              </div>
              
            </div>
          </div>
        </address>
          
        <div className="flex flex-col gap-6 w-full sm:w-auto">
            <h1 className="text-3xl font-bold text-slate-200">Follow TEMSMET 2025</h1>
            <div className="flex gap-2"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter w-6 h-6 hover:text-sky-400 hover:cursor-pointer"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              <a href="https://www.linkedin.com/company/temsmet2025-nitdelhi/posts/?feedView=all" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin w-6 h-6 hover:text-sky-400 hover:cursor-pointer"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook w-6 h-6 hover:text-sky-400 hover:cursor-pointer"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram w-6 h-6 hover:text-sky-400 hover:cursor-pointer"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </div>
          <img src="./logos/IEEE TEMS logo/Temsmet 2025.png" className="w-36" alt="nitdelhi-conference" />
          </div>
        
      </div>
      <div className="w-full h-[1px] bg-sky-300"></div>
      <div className="text-center p-10 text-gray-400">
       <h2>©2025 TEMSMET Organizing Committee, NIT Delhi. All Rights Reserved.</h2> 
      </div>
    </footer>
  );
};

export default Footer;
