/**
 * Footer component displaying the copyright message with the current year.
 * 
 * @returns {JSX.Element} The footer JSX structure containing the copyright message.
 */
function Footer() {
    return (
        <div id="footer" className="relative z-50 bottom-0 w-full bg-slate-950 flex justify-center items-center py-4">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl text-amber-100 text-center">
                &copy; Copyright 2025 IEEE – All rights reserved.
            </span>
        </div>
    );
}

export default Footer;