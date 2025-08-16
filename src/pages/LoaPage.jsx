import React from 'react'
import LOA from '../components/LOA'
import ScrollToTop from '../components/ScrollToTop'
import Navbar from './Navbar'
import Sidebar from '../components/Sidebar'
import Carousel from '../components/Carousel/Carousel'
import { LatestUpdates } from '../components/SmallComps'
import Footer from '../components/Footer'


const LoaPage = () => {
    return (
      <>
      <ScrollToTop elementId="camera-ready-paper" />
            <Navbar />
            <Carousel />
            <LatestUpdates/>
      <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 w-full gap-1">
        <div className="sm:col-span-3 md:col-span-4 lg:col-span-6 xl:col-span-8 p-5 bg-slate-50 rounded-b-xl sm:rounded-l-none sm:rounded-r-xl">
          <LOA />
        </div>
        <div className="sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 bg-white p-5 rounded-t-xl sm:rounded-r-none sm:rounded-l-xl">
          <Sidebar />
        </div>
            
    </div>
    <Footer />
    
      </>
  )
}

export default LoaPage