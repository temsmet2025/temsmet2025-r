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
import ScrollToTop from './components/ScrollToTop.jsx';
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
          {/* <ScrollToTop elementId="home" /> */}
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
          <ScrollToTop elementId="Call For Papers" />
          <PreNav />
          <Nav setShowContact={setShowContact} />
          <Carousel />
          <Contact setShowContact={setShowContact} showContact={showContact} />
          <ListView
            title="Call For Papers"
            data={conferenceTracks}
            classes="flex flex-col flex-wrap w-full justify-around md:flex-row md:pl-10"
          />
          <Footer />
        </>
      ),
    },
    {
      path: '/org-committee',
      element: (
        <>
          <ScrollToTop elementId="org-committe" />
          <PreNav />
          <Nav setShowContact={setShowContact} />
          <Carousel />
          <Contact setShowContact={setShowContact} showContact={showContact} />
          <OrgCommittee />
          <Footer />
        </>
      ),
    },
    {
      path: '/keynote-speakers',
      element: (
        <>
          <ScrollToTop elementId="keynote-speakers" />
          <PreNav />
          <Nav setShowContact={setShowContact} />
          <Carousel />
          <Contact setShowContact={setShowContact} showContact={showContact} />
          <KeynoteSpeakers />
          <Footer />
        </>
      ),
    },
    {
      path: '/venue',
      element: (
        <>
          <ScrollToTop elementId="venue-and-dates" />
          <PreNav />
          <Nav setShowContact={setShowContact} />
          <Carousel />
          <Venue />
          <Contact setShowContact={setShowContact} showContact={showContact} />
          <Footer />
        </>
      ),
    },
    {
      path: '/submission-guidelines',
      element: (
        <>
          <ScrollToTop elementId="submission-guidelines" />
          <PreNav />
          <Nav setShowContact={setShowContact} />
          <Carousel />
          <Contact setShowContact={setShowContact} showContact={showContact} />
          <SubmissionGuidelines />
          <Footer />
        </>
      ),
    },
    {
      path: '/registration',
      element: (
        <>
          <ScrollToTop elementId="Registration" />
          <PreNav />
          <Nav setShowContact={setShowContact} />
          <Carousel />
          <Contact setShowContact={setShowContact} showContact={showContact} />
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
