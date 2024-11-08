/**
 * Footer component displaying the copyright message with the current year.
 * 
 * @returns {JSX.Element} The footer JSX structure containing the copyright message.
 */
function Footer() {
    return (
        <div className="relative z-50 bottom-0 w-full h-20 bg-slate-950 flex justify-center items-center">
            <span className="text-xl text-amber-100">&copy; {new Date().getFullYear()} TEMSMET. All rights reserved.</span>
        </div>
    );
}

export default Footer;
