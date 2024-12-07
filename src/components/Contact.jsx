import { useEffect, useState } from "react";
function Contact() {
    const [showContact, setShowContact] = useState(false);
    const HandleBtn = () => {
        setShowContact((prev) => !prev);
    }
    useEffect(() => {
        const contactBtn = document.getElementById("contact-link");

        if (contactBtn)
            contactBtn.addEventListener("click", HandleBtn);

        return () => {
            if (contactBtn)
                contactBtn.removeEventListener("click", HandleBtn);
        }
    }, [])
    return (
        <section className={`${showContact ? "fixed inset-0 backdrop-blur-md bg-black/30" : "hidden"} z-40`}>
            {/* Modal Section */}
            <div
                id="contact"
                className="bg-white relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-500 rounded-lg shadow-lg p-6 w-[50rem] h-[20rem] z-50"
            >
                {/* Content */}
                <h1 className="text-center text-4xl font-serif font-bold">Contact Us</h1>
                <div id="contact-details" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
                    {/* Phone Number */}
                    <div className="flex justify-center w-full">
                        <span className="font-semibold">Phone: </span>
                        <span>+11-33861120/22</span>
                    </div>
                    {/* Email */}
                    <div className="flex justify-center w-full">
                        <span className="font-semibold">Email: </span>
                        <span>temsmet2025@nitdlehi.ac.in</span>
                    </div>
                </div>
                <button className="absolute bottom-5 right-5 border-solid border-2 border-green-400  px-7 py-1 rounded-lg
                        transition-all duration-400 ease-in-out hover:bg-green-300 hover:text-white  hover:border-green-300/30 font-bold"
                    onClick={HandleBtn}
                >
                    Close
                </button>
            </div>
        </section>

    )
}
export default Contact; 