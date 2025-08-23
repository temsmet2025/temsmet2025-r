import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Carousel from '../components/Carousel/Carousel'
import TableView from '../components/TableView'
import SectionList from '../components/SectionLIst'
import Footer from '../components/Footer'
import { registrationFees, deligates, registrationNotes } from '../assets/dataItems';
import Sidebar from '../components/Sidebar'
import Navbar from './Navbar'
import { LatestUpdates } from '../components/SmallComps'
const Registration = () => {
  return (
        <>
            <ScrollToTop elementId="Registration" />
            <Navbar></Navbar>
          <Carousel />
          <LatestUpdates/>
            <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 w-full gap-1">
                <div className="sm:col-span-3 md:col-span-4 lg:col-span-6 xl:col-span-8 p-5 bg-white rounded-b-xl sm:rounded-l-none sm:rounded-r-xl">
                    <div id="reg-link" className="">
                <TableView  
                tableName="Registration"
                tableHead={[
                    "Author Categories",
                    "Early Bird (Indian)",
                    "Early Bird (Foreign)",
                    "Regular (Indian)",
                    "Regular (Foreign)",
                ]}
                dataItem={registrationFees}
                classes=""
                />
                      <div className="text-xl text-bold text-sky-700 bg-red-400/10 px-5 py-2 border-[0.5px] border-red-400 rounded-sm mt-2">
                          <p>
                             <span className="text-2xl font-extrabold">*</span> If registering author is same as previous paper(s).
                          </p>
                </div>
                <TableView
                tableHead={["Delegates / Participants", "Fees"]}
                dataItem={deligates}
                classes=""
                />
                <div className="flex flex-col justify-center items-center mt-5 gap-4 text-sky-600">
                    <a target='_blank' className='px-6 py-3 border-2 border-sky-700 rounded-md hover:border-sky-800 transition-colors duration-500 ease-in-out hover:shadow-lg hover:text-sky-700 hover:bg-sky-300/70' href="https://pages.razorpay.com/pl_PhjEnIlxwpbfrt/view">Register Here Indian Authors</a>
                    <a target='_blank' className='px-6 py-3 border-2 border-sky-700 rounded-md hover:border-sky-800 transition-colors duration-500 ease-in-out hover:shadow-lg hover:text-sky-700 hover:bg-sky-300/70' href="https://pages.razorpay.com/pl_Pi6HSDdeQb8kxp/view">Register Here Global Authors</a>
                </div>
                <div className="mt-10">
                    <SectionList dataItem={registrationNotes} title="Notes" />
                </div>
            </div >
                </div>
            <div className="sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 bg-white p-5 rounded-t-xl sm:rounded-r-none sm:rounded-l-xl"><Sidebar /></div>
            </div>

            <Footer />
        </>
  )
}

export default Registration