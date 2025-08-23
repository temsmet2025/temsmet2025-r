import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "./Navbar";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer";
import { LatestUpdates } from "../components/SmallComps";

const HackathonPage = () => {
  const formUrl =
    "https://forms.office.com/Pages/ResponsePage.aspx?id=ETrdmUhDaESb3eUHKx3B5jl1qzbkwlJKqHu6Ame6nSFURE1YOEdPU1JFVjdHNTBJT05PMTRRRzYyTS4u&origin=QRCode"; // TODO: set VITE_HACKATHON_FORM_URL
  return (
    <>
      <Navbar />
      <Carousel />
      <LatestUpdates />
      <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 w-full gap-1">
        <div className="sm:col-span-3 md:col-span-4 lg:col-span-6 xl:col-span-8 p-5 bg-white rounded-b-xl sm:rounded-l-none sm:rounded-r-xl">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between mb-4">
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
              aria-disabled={formUrl === "#"}
            >
              Registration Form
            </a>
            <a
              href="/CodeMATrix Sprint Poster NITD Aug 2025.webp"
              download="CodeMATrix-Sprint-Poster-NITD-Aug-2025.webp"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Download Poster
            </a>
          </div>
          <img
            src="/CodeMATrix Sprint Poster NITD Aug 2025.webp"
            alt="CodeMATrix Sprint - Innovate with MATLAB Hackathon poster"
            className="w-full h-auto rounded-md"
            loading="lazy"
          />
        </div>
        <div className="sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 bg-white p-5 rounded-t-xl sm:rounded-r-none sm:rounded-l-xl">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HackathonPage;
