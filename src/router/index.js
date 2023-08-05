import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import NoMatch from "../widgets/NoMatch.jsx";
import Home from "../widgets/Home.jsx";
import OriginStory from "../widgets/OriginStory.jsx";
import TKSSIR from "../widgets/TKSSIR.jsx";
import ThisMyMob from "../widgets/ThisMyMob.jsx";
import TINA from "../widgets/TINA.jsx";
import PersonalWebsite from "../widgets/PersonalWebsite.jsx";
import AJourneyFromPaperToDigital from "../widgets/AJourneyFromPaperToDigital.jsx";

import pagesConfig from '../config/pages.json';
import routeFactory from "../utils/route-factory.js";

const router = createBrowserRouter(routeFactory(pagesConfig));

export default router;
