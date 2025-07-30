import React, { useState } from "react";
import { HeadingBar, SponsorPackageCard } from "./SmallComps";
import { Accordion } from "flowbite-react";
const Sponsorship = () => {
  const CrownIcon = (
      <svg xmlns="http://www.w3.org/2000/svg"
                      width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-crown w-20 h-20 mb-4 text-white"
                      dataLovId="src/components/SponsorshipTiers.tsx:115:16"
                      dataLovName="tier.icon"
                      dataComponentPath="src/components/SponsorshipTiers.tsx"
                      dataComponentLine="115" dataComponentFile="SponsorshipTiers.tsx"
                      dataComponentName="tier.icon" dataComponentContent="%7B%22className%22%3A%22w-12%20h-12%20mx-auto%20mb-4%22%7D">
                      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
  )
  const diamondIcon = (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-diamond w-16 h-16 mx-auto mb-4"
      >
        <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
        </svg>
  )
  const goldIcon = (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-trophy w-16 h-16 mx-auto mb-4"
  >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )

  const silverIcon = (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-medal w-16 h-16 mx-auto mb-4"
    >
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="M13 12 18.88 2.2" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </svg>
  )

  const bronzeIcon = (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-award w-16 h-16 mx-auto mb-4"
      >
        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
        <circle cx="12" cy="8" r="6" />
    </svg>
  )

  const platinamData = [
    "2 spaces (5x5 sqm) exhibition area",
    "Platinum sponsor on stage backdrop",
    "Featured on all promotional materials",
   "30 minutes presentation time",
    "VIP networking access",
    "Complimentary conference proceedings"
  ]

  const diamondData = [
    "2 spaces (3x3 sqm) exhibition area",
    "Diamond sponsor on stage backdrop",
    "Featured on all promotional materials",
    "20 minutes presentation time",
    "Networking access",
    "Conference proceedings included"
  ]
  
  const goldData = [
    "1 space (3x3 sqm) exhibition area",
    "Gold sponsor on stage backdrop",
    "Featured on all promotional materials",
    "10 minutes presentation time",
    "Standard networking access",
    "Conference proceedings",

  ]

  const silverData = [
    "1 space (2x2 sqm) exhibition area",
    "Silver sponsor on stage backdrop",
    "Featured on all promotional materials",
    "5 minutes presentation time",
    "Basic networking access",
    "Digital proceedings",
  ]

  const bronzeData = [
    "No exhibition space",
    "Bronze sponsor on stage backdrop",
    "Same as Platinum promotional coverage",
    "2 minutes presentation time",
    "Basic access",
    "Digital proceedings",
  ]

  return (
    <>
      <div className="bg-[#582C83] bg-[#0074E6] bg-[#FEC008] bg-[#C0C0C0] bg-[#CD7F32] text-lg"></div>
      <div className="flex flex-col gap-3 justify-center items-center w-full mb-10 mt-3">
        <div className="flex flex-col gap-0 items-center w-full">
          <span className="font-bold sm:text-3xl text-2xl text-sky-700">Sponsorship Packages</span>
          <HeadingBar classes="w-full mt-1"/>
        </div>
        <div className="flex flex-col items-center text-center text-lg flex-wrap text-gray-500 font-semibold">
          <span className="">
          Partner with us to reach industry leaders, researchers, and innovators in
        </span>
        <span className="">
          technology and engineering management
        </span>
        </div>
        </div>
    <div className="grid grid-cols-[0.5] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 justify-center items-center w-full ">
        
      <SponsorPackageCard icon={CrownIcon} tier_name="Platinum" data={platinamData} classes="bg-[#582C83] text-lg font-semibold"></SponsorPackageCard>
      <SponsorPackageCard icon={diamondIcon} tier_name="Diamond" data={diamondData} classes="bg-[#0074E6] text-lg font-semibold"></SponsorPackageCard>
      <SponsorPackageCard icon={goldIcon} tier_name="Gold" data={goldData} classes="bg-[#FEC008] text-lg font-semibold"></SponsorPackageCard>
      <SponsorPackageCard icon={silverIcon} tier_name="Silver" data={silverData} classes="bg-[#C0C0C0] text-lg font-semibold"></SponsorPackageCard>
        <SponsorPackageCard icon={bronzeIcon} tier_name="Bronze" data={bronzeData} classes="bg-[#CD7F32] text-lg font-semibold"></SponsorPackageCard>
      </div>
      <div className="flex flex-col p-8 items-center text-center text-lg flex-wrap text-gray-500 font-semibold">
        <span className="" onClick={(e) => scrollToSection("footer")}>
          <a href="mailto:temsmet2025@nitdelhi.ac.in">
            Reach us for customized pacakge.
          </a>
          </span>
        </div>
    </>
    
   
  );
};

export default Sponsorship;
