import React from 'react'
import ListView from '../components/ListView'
import { conferenceTracks } from '../assets/dataItems'
import Sidebar from '../components/Sidebar'
import Navbar from './Navbar'
import Carousel from '../components/Carousel/Carousel'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
const CallForPaper = () => {
  return (
    <>
      <ScrollToTop elementId="Call For Papers" />
        <Navbar />
        <Carousel />
        <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-6 w-full gap-1">
              <div className="sm:col-span-3 md:col-span-4 p-5 bg-white rounded-b-xl sm:rounded-l-none  sm:rounded-r-xl">
                    <div id="cfp-link">
                        <ListView
                        title="Call For Papers"
                        data={conferenceTracks}
                        // classes="flex flex-col flex-wrap w-full justify-around md:flex-row md:pl-10"
                        />
                    </div>
                </div>
              <div className="sm:col-span-2 md:col-span-2 bg-white p-5 rounded-t-xl sm:rounded-r-none sm:rounded-l-xl"><Sidebar /></div>
        </div>
        <Footer />
      
    </>
    
  )
}

export default CallForPaper