import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import OriginStory from "./pages/OriginStory.jsx";
import TKSSIR from "./pages/TKSSIR.jsx";
import ThisMyMob from "./pages/ThisMyMob.jsx";
import TINA from "./pages/TINA.jsx";
import PersonalWebsite from "./pages/PersonalWebsite.jsx";
import AJourneyFromPaperToDigital from "./pages/AJourneyFromPaperToDigital.jsx";
import Home from "./pages/Home.jsx";
import NoMatch from "./pages/NoMatch.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NoMatch/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/originstory",
        element: <OriginStory/>
      },
      {
        path: "/work/tkssir",
        element: <TKSSIR/>
      },
      {
        path: "/work/thismymob",
        element: <ThisMyMob/>
      },
      {
        path: "/work/tina",
        element: <TINA/>
      },
      {
        path: "/experiments/personalwebsitev1",
        element: <PersonalWebsite/>
      },
      {
        path: "/learnings/ajourneyfrompapertodigital",
        element: <AJourneyFromPaperToDigital/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
