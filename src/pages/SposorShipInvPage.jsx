import React from 'react'
import Sponsorship from "../components/Sponsorship";
import Navbar from './Navbar';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Sidebar from '../components/Sidebar';
import { LatestUpdates } from '../components/SmallComps';
const SposorShipInvPage = () => {
  return (
    <>
          <ScrollToTop elementId="sponsorship-invitation" />
          <Navbar />
          {/* <Nav onNavClick={handleScrollToSection} /> */}
      <Carousel />
      <LatestUpdates/>
          <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 w-full gap-1">
            <div className="sm:col-span-3 md:col-span-4 lg:col-span-6 xl:col-span-8 p-5 bg-white rounded-b-xl sm:rounded-l-none sm:rounded-r-xl">
                <div id="sg-list">
                    <Sponsorship/>
                </div>
            </div>
            <div className="sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 bg-white p-5 rounded-t-xl sm:rounded-r-none sm:rounded-l-xl"><Sidebar /></div>
            </div>
          
          <Footer />
        </>
  )
}

export default SposorShipInvPage