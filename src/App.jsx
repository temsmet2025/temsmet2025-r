import Nav from './components/Navbar/Nav'
import Carousel from './components/Carousel/Carousel'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./components/Home"
import ListView from "./components/ListView"
import { conferenceTracks } from "./assets/dataItems.js"
import Footer from './components/Footer.jsx'
import OrgCommittee from './components/OrgCommitte.jsx'
import Venue from './components/Venue.jsx'
import SubmissionGuidelines from './components/SubmissionGuidelines.jsx'
import { registrationFees, deligates } from './assets/dataItems.js'
import TableView from './components/TableView.jsx'
import PreNav from './components/PreNav.jsx'
import KeynoteSpeakers from './components/KeynoteSpeakers.jsx'
import Contact from "./components/Contact"


/**
 * Main application component that sets up routing for different pages.
 *
 * @component
 * @returns {JSX.Element} The main App component rendering routed pages.
 */
function App() {
  /**
   * Router object defining routes and their respective components.
   * 
   * Routes:
   * - `/` (Home): Displays the Nav, Carousel, Home, and Footer components.
   * - `/call-for-papers`: Displays Nav, Carousel, ListView with conferenceTracks data, and Footer.
   * - `/org-committee`: Displays Nav, Carousel, OrgCommittee, and Footer components.
   */
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <PreNav />
          <Nav />
          <Carousel />
          <Home />
          <Contact />
          <Footer />
        </>
      )
    },
    {
      path: "/call-for-papers",
      element: (
        <>
          <PreNav />
          <Nav />
          <Carousel />
          <Contact />
          <ListView title="Call For Papers" data={conferenceTracks} />
          <Footer />
        </>
      )
    },
    {
      path: "/org-committee",
      element: (
        <>
          <PreNav />
          <Nav />
          <Carousel />
          <Contact />
          <OrgCommittee />
          <Footer />
        </>
      )
    },
    {
      path: "/keynote-speakers",
      element: (
        <>
          <PreNav />
          <Nav />
          <Carousel />
          <Contact />
          <KeynoteSpeakers />
          <Footer />
        </>
      )
    },
    {
      path: "/venue",
      element: (
        <>
          <PreNav />
          <Nav />
          <Carousel />
          <Venue />
          <Contact />
          <Footer />
        </>
      )
    },
    {
      path: "/submission-guidelines",
      element: (
        <>
          <PreNav />
          <Nav />
          <Carousel />
          <Contact />
          <SubmissionGuidelines />
          <Footer />
        </>
      )
    },
    {
      path: "/registration",
      element: (
        <>
          <PreNav />
          <Nav />
          <Carousel />
          <Contact />

          <TableView tableName="Registration" tableHead={['Author Category', 'Early Bird (Indian)', 'Early Bird (Foreign)', 'Regular (Indian)', 'Regular (Foreign)']} dataItem={registrationFees} classes="sm:w-5/6" />
          <TableView tableName="" tableHead={['Delegates / Participants', 'Fees']} dataItem={deligates} classes="sm:w-5/6" />
          <Footer />
        </>
      )
    }
  ],
    /**
     * Base path for the application, used when deploying on GitHub Pages.
     * Uncomment the line below for the appropriate deployment path.
     */
    // { basename: "/temsmet.github.io" }, // for GitHub Pages deployment
    { basename: "/temsmet2025-r" } // for GitHub Pages deployment
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
