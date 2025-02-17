import { useEffect, useState } from "react";
import { X } from 'lucide-react'
function Contact({ showContact, setShowContact }) {
    const HandleBtn = () => {
        setShowContact((prev) => !prev);
    }
    // useEffect(() => {
    // const contactBtn = document.getElementById("contact-link");
    // const mobilecontactBtn = document.getElementById("mobile-contact-link");

    // if (contactBtn)
    //     contactBtn.addEventListener("click", HandleBtn);
    // if (mobilecontactBtn)
    //     mobilecontactBtn.addEventListener("click", HandleBtn);

    // return () => {
    //     if (contactBtn)
    //         contactBtn.removeEventListener("click", HandleBtn);
    //     if (mobilecontactBtn)
    //         mobilecontactBtn.removeEventListener("click", HandleBtn);
    // }
    // }, [])
    return (
        <section className={`${showContact ? "fixed inset-0 backdrop-blur-md bg-black/30" : "hidden"}  z-40`}>
            <div
                id="contact"
                className="bg-white relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-500 rounded-lg shadow-lg p-6 w-[20rem] h-[12rem] sm:w-[30rem] sm:h-[20rem] lg:w-[50rem] lg:h-[20rem] z-50"
            >

                <h1 className="text-center text-3xl sm:text-4xl font-serif font-bold">Contact Us</h1>
                <div id="contact-details" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg md:text-xl sm:text-2xl lg:text-3xl">

                    <div className="flex justify-center w-full">
                        <span className="font-semibold">Phone: </span>
                        <span className="cursor-pointer"><a href="tel:+11-33861122/83">+11-33861122/83</a> </span>
                    </div>

                    <div className="flex justify-center w-full">
                        <span className="font-semibold">Email: </span>
                        <span className="cursor-pointer"><a href="mailto:temsmet2025@nitdelhi.ac.in">temsmet2025@nitdelhi.ac.in</a> </span>
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