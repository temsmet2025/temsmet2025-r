import Nav from './components/Navbar/Nav';
import Carousel from './components/Carousel/Carousel';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import ListView from './components/ListView';
import { conferenceTracks } from './assets/dataItems.js';
import Footer from './components/Footer.jsx';
import OrgCommittee from './components/OrgCommitte.jsx';
import Venue from './components/Venue.jsx';
import SubmissionGuidelines from './components/SubmissionGuidelines.jsx';
import { registrationFees, deligates } from './assets/dataItems.js';
import TableView from './components/TableView.jsx';
import PreNav from './components/PreNav.jsx';
import KeynoteSpeakers from './components/KeynoteSpeakers.jsx';
import Contact from './components/Contact';
import { useState } from 'react';

/**
 * Main application component that sets up routing for different pages using HashRouter.
 *
 * @component
 * @returns {JSX.Element} The main App component rendering routed pages.
 */
function App() {
  const [showContact, setShowContact] = useState(false);

  /**
   * Router object defining routes and their respective components using HashRouter.
   */
  const router = createHashRouter([
    {
      path: '/',
      element: (
        <>
          <PreNav />
          <Nav setShowContact={setShowContact} />
          <Carousel />
          <Home />
          <Contact setShowContact={setShowContact} showContact={showContact} />
          <Footer />
        </>
      ),
    },
    {
      path: '/call-for-papers',
      element: (
        <>
          <PreNav />
          <Nav setShowContact={setShowContact} />
          <Carousel />
          <Contact setShowContact={setShowContact} showContact={showContact} />
          <div id='cfp-link'> 
            <ListView
              title="Call For Papers"
              data={conferenceTracks}
              classes="flex flex-col flex-wrap w-full justify-around md:flex-row md:pl-10"
            />
          </div>
          
          <Footer />
        </>
      ),
    },
    {
      path: '/org-committee',
      element: (
        <>
          <PreNav />
          <Nav setShowContact={setShowContact} />
          <Carousel />
          <Contact setShowContact={setShowContact} showContact={showContact} />
          <div id='committee-link'>
            <OrgCommittee />
          </div>
          
          <Footer />
        </>
      ),
    },
    {
      path: '/keynote-speakers',
      element: (
        <>
          <PreNav />
          <Nav setShowContact={setShowContact} />
          <Carousel />
          <Contact setShowContact={setShowContact} showContact={showContact} />
          <div id='ks-link'>
            <KeynoteSpeakers />
          </div>
          
          <Footer />
        </>
      ),
    },
    {
      path: '/venue',
      element: (
        <>
          <PreNav />
          <Nav setShowContact={setShowContact} />
          <Carousel />
          <div id='venue-link'>
            <Venue />
          </div>
          
          <Contact setShowContact={setShowContact} showContact={showContact} />
          <Footer />
        </>
      ),
    },
    {
      path: '/submission-guidelines',
      element: (
        <>
          <PreNav />
          <Nav setShowContact={setShowContact} />
          {/* <Nav onNavClick={handleScrollToSection} /> */}
          <Carousel />
          <div id='sg-list'>
            <SubmissionGuidelines />
          </div>
          <Contact setShowContact={setShowContact} showContact={showContact} />
          <Footer />
        </>
      ),
    },
    {
      path: '/registration',
      element: (
        <>
          <PreNav />
          <Nav setShowContact={setShowContact} />
          <Carousel />
          {/* <Contact setShowContact={setShowContact} showContact={showContact} /> */}
          <div id='reg-link'> 
            <TableView
              tableName="Registration"
              tableHead={['Author Category', 'Early Bird (Indian)', 'Early Bird (Foreign)', 'Regular (Indian)', 'Regular (Foreign)']}
              dataItem={registrationFees}
              classes="sm:w-5/6"
            />
            <TableView
              tableName=""
              tableHead={['Delegates / Participants', 'Fees']}
              dataItem={deligates}
              classes="sm:w-5/6"
            />
          </div>
          
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
