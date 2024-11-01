import Nav from './components/Navbar/Nav'
import Carousel from './components/Carousel/Carousel'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./components/Home"
import ListView from "./components/ListView"
import { conferenceTracks } from "./assets/dataItems.js"
import Footer from './components/Footer.jsx'
import OrgCommittee from './components/OrgCommitte.jsx'

function App() {
  const router = createBrowserRouter([
      {
        path: "/",
        element: (
          <>
          <Nav /> 
          <Carousel />
            < Home />
            <Footer/>
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
          <Footer/>
        </>
      )
    },
    {
      path: "/org-committee",
      element: (
        <>
        <Nav />
          <Carousel />
          <OrgCommittee/>
          <Footer/>
        </>
      )
    }
      
    ],
    // { basename: "/temsmet.github.io" }, //uncomment this line for github pages and change vite.config
  )
  return (
    <>

      
      <RouterProvider router={router}/>   
    </>
  )
}

export default App
