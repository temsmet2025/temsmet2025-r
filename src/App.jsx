import Nav from './components/Navbar/Nav'
import Carousel from './components/Carousel/Carousel'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./components/Home"
import ListView from "./components/ListView"
import {conferenceTracks} from "./assets/dataItems.js"
function App() {
  const router = createBrowserRouter([
      {
        path: "/",
        element: (
          <>
          <Nav /> 
          <Carousel />
            < Home />
          </>
        )
        
    },
    {
      path: "/call-for-papers",
      element: (
        <>
          <Nav />
          <Carousel />
          <ListView title="Call For Papers" data={ conferenceTracks } />
        </>
      )
    }
      
    ],
    { basename: "/temsmet.github.io" },
  )
  return (
    <>

      
      <RouterProvider router={router}/>   
    </>
  )
}

export default App
