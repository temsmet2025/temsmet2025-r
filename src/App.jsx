import Carousel from "./components/Carousel/Carousel";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { conferenceTracks, registrationFees, deligates, registrationNotes } from './assets/dataItems.js';
import Footer from "./components/Footer.jsx";
import OrgCommitteePage from "./pages/OrgCommitteePage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { useState } from "react";
import TouristDestinations from "./components/TouristDestinations.jsx";
import ExploreDelhi from "./components/ExploreDelhi.jsx";
import Registration from "./pages/Registration.jsx";
import Navbar from "./pages/Navbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import CallForPaper from "./pages/CallForPaper.jsx";
import KeynotesPage from "./pages/KeynotesPage.jsx";
import VenueDirPage from "./pages/VenueDirPage.jsx";
import SubmissionGuidePage from "./pages/SubmissionGuidePage.jsx";
import SposorShipInvPage from "./pages/SposorShipInvPage.jsx";
import ExploreDelhiPage from "./pages/ExploreDelhiPage.jsx";
import TouristDestinationsPage from "./pages/TouristDestinationsPage.jsx";


/**
 * Main application component that sets up routing for different pages using HashRouter.
 *
 * @component
 * @returns {JSX.Element} The main App component rendering routed pages.
 */
function App() {
  const [showContact, setShowContact] = useState(false);
   const [active, setActive] = useState(0);
  /**
   * Router object defining routes and their respective components using HashRouter.
   */
  const router = createHashRouter([
    {
      path: "/",
      element: (
          <Homepage/>
      ),
    },
    {
      path: "/call-for-papers",
      element: (
          <CallForPaper/>
      ),
    },
    {
      path: "/org-committee",
      element: (
          <OrgCommitteePage/>
      ),
    },
    {
      path: "/keynote-speakers",
      element: (
          <KeynotesPage></KeynotesPage>
      ),
    },
    {
      path: "/venue&directions",
      element: (
          <VenueDirPage></VenueDirPage>
      ),
    },
    {
      path: "/submission-guidelines",
      element: (
          <SubmissionGuidePage></SubmissionGuidePage> 
      ),
    },
    {
      path: "/sponsorhip-invitation",
      element: (
        <SposorShipInvPage></SposorShipInvPage>
      ),
    },
    {
      path: "/explore-delhi",
      element: (
       <ExploreDelhiPage></ExploreDelhiPage>
      ),
    },
    {
      path: "/tourist-destinations",
      element: (
        <TouristDestinationsPage></TouristDestinationsPage>
      ),
    },
    {
      path: "/registration",
      element: (
        <>
          <Registration></Registration>
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
