import Nav from './components/Navbar/Nav'
import Carousel from './components/Carousel/Carousel'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./components/Home"
import ListView from "./components/ListView"
import { conferenceTracks } from "./assets/dataItems.js"
import Footer from './components/Footer.jsx'
import OrgCommittee from './components/OrgCommitte.jsx'
import Venue from './components/Venue.jsx'

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
          <Nav />
          <Carousel />
          <Home />
          <Footer />
        </>
      )
    },
    {
      path: "/call-for-papers",
      element: (
        <>
          <Nav />
          <Carousel />
          <ListView title="Call For Papers" data={conferenceTracks} />
          <Footer />
        </>
      )
    },
    {
      path: "/org-committee",
      element: (
        <>
          <Nav />
          <Carousel />
          <OrgCommittee />
          <Footer />
        </>
      )
    },
    {
      path:"/venue",
      element:(
        <>
          <Nav/>
          <Carousel/>
          <Venue/>
          <Footer/>
        </>
      )
    },
  ],
  /**
   * Base path for the application, used when deploying on GitHub Pages.
   * Uncomment the line below for the appropriate deployment path.
   */
  // { basename: "/temsmet.github.io" }, // for GitHub Pages deployment
  // { basename: "/temsmet2025-r" } // for GitHub Pages deployment
  )

  return (
    <>
      <RouterProvider router={router} />  
    </>
  )
}

export default App
