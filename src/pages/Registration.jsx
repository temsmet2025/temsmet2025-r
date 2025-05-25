import React from 'react'
import Nav from '../components/Navbar/Nav'
// import ScrollToTop, PreNav, TableView, SectionList from ''
import ScrollToTop from '../components/ScrollToTop'
import PreNav from '../components/PreNav'
import Carousel from '../components/Carousel/Carousel'
import TableView from '../components/TableView'
import SectionList from '../components/SectionLIst'
import Footer from '../components/Footer'
import { registrationFees, deligates, registrationNotes } from '../assets/dataItems';
import { Link } from 'react-router-dom'

const Registration = ({setShowContact, active, setActive}) => {
  return (
        <>
            <ScrollToTop elementId="Registration" />
            <PreNav />
            <Nav setShowContact={setShowContact} linkActive={active} setLinkActive = {setActive}/>
            <Carousel />
            {/* <Contact setShowContact={setShowContact} showContact={showContact} /> */}
            <div id="reg-link" className="p-5 mt-10 sm:p-5 md:ml-16 md:mr-16 lg:ml-20 lg:mr-20">
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

            <Footer />
        </>
  )
}

export default Registration