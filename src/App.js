import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import Topic from "./Pages/Topic";
import AboutUs from "./Pages/AboutUs";
import TagManager from "react-gtm-module";
import ReactGA from "react-ga";
import Ayurveda from "./Pages/Ayurveda";
import Profile from "./Pages/Profile";

const TRACKING_ID = "G-90T8QCCP9J"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const tagManagerArgs = {
  gtmId: "GTM-KH75MX7",
};
TagManager.initialize(tagManagerArgs);

function App() {
  window.dataLayer.push({
    event: "pageview",
  });
  ReactGA.event({
    category: "page",
    action: "PageView",
  });
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home card={6} />} />
          <Route path="/blog" element={<BlogPage card={12} />} />
          <Route path="/topic/:id" element={<Topic card={3} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/ayurveda" element={<Ayurveda />} />
          <Route path="/ayurveda/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
