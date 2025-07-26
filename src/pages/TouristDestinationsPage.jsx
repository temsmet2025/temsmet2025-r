import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Carousel from '../components/Carousel/Carousel'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Navbar from './Navbar'

import TouristDestinations from '../components/TouristDestinations'
const TouristDestinationsPage = () => {
  return (
    <>
        <ScrollToTop elementId="tourist-destinations" />
        <Navbar />
        <Carousel />
        <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-6 w-full gap-2">
            <div className="sm:col-span-3 md:col-span-4 p-5 bg-white rounded-b-xl sm:rounded-b-none sm:rounded-r-xl">
                <div id="t-dest">
                    <TouristDestinations />
                </div>
            </div>
        <div className="sm:col-span-2 md:col-span-2 bg-white p-5 rounded-t-xl sm:rounded-t-none sm:rounded-l-xl"><Sidebar /></div>
        </div>
        <Footer />
    </>
  )
}

export default TouristDestinationsPage