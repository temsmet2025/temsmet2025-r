import { useEffect, useState } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/Homepage.jsx";
import CallForPaper from "./pages/CallForPaper.jsx";
import OrgCommitteePage from "./pages/OrgCommitteePage.jsx";
import KeynotesPage from "./pages/KeynotesPage.jsx";
import VenueDirPage from "./pages/VenueDirPage.jsx";
import Registration from "./pages/Registration.jsx";
import LoaPage from "./pages/LoaPage.jsx";
import ExploreDelhiPage from "./pages/ExploreDelhiPage.jsx";
import TouristDestinationsPage from "./pages/TouristDestinationsPage.jsx";
import SposorShipInvPage from "./pages/SposorShipInvPage.jsx";
import SubmissionGuidePage from "./pages/SubmissionGuidePage.jsx";
import HackathonPage from "./pages/Hackathon.jsx";

function App() {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL + "common/pages/"
    fetch(API_URL) // Django API
      .then((res) => res.json())
      .then((data) => {
        const routeMap = {
          "": <Homepage />,
          "call-for-papers": <CallForPaper />,
          "org-committee": <OrgCommitteePage />,
          "keynote-speakers": <KeynotesPage />,
          "venue&directions": <VenueDirPage />,
          "submission-guidelines": <SubmissionGuidePage />,
          "sponsorship-invitation": <SposorShipInvPage />,
          "explore-delhi": <ExploreDelhiPage />,
          "tourist-destinations": <TouristDestinationsPage />,
          "registration": <Registration />,
          "camera-ready-paper": <LoaPage />,
          "testing":<LoaPage/>,
          "hackathon": <HackathonPage />,
        };

        // Filter routes based on backend enabled pages
        const enabledRoutes = data
          .filter((page) => page.enabled)
          .map((page) => ({
            path: `/${page.name}`,
            element: routeMap[page.name] || <Homepage />,
          }));

        // Always add homepage
        enabledRoutes.unshift({ path: "/", element: <Homepage /> });

        setRoutes(enabledRoutes);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching page config:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  const router = createHashRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
