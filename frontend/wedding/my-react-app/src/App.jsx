import "./App.css";
import Nav from "./Components/Navbar/Nav";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Wedding from "./Components/Weddingpage/Wedding";
import Aboutpage from "./Components/AboutPage/Aboutpage";
import Gallery from "./Components/Gallery/Gallery";
import Costume from "./Components/Costumes/Costume";
import Login from "./Components/Login/Login";
import Sign from "./Components/Sign/Sign";
import { Routes, Route } from "react-router-dom";
import Faqcontent from "./Components/Faqpage/Faqcontent";
import Hostsec from "./Components/Host/Hostsec";
import Blogpage from "./Components/Blogpage/Blogpage";
import Subblog from "./Components/Subblog/Subblog";
import Subblogss from "./Components/Subblogs/Subblogss";
import Christians from "./Components/Celebrations/Celebrations";
import Contacted from "./Components/Contacting/Contacted";
import Howtohost from "./Components/Howhost/Howtohost";
import Venue from "./Components/Venue/Venue";
import Morevenue1 from "./Components/Morevenue/Morevenue1";
import Morevenue2 from "./Components/Morevenue/Morevenue2";
import Morevenue3 from "./Components/Morevenue/Morevenue3";
import Morevenue4 from "./Components/Morevenue/Morevenue4";
import Morevenue5 from "./Components/Morevenue/Morevenue5";
import Morevenue6 from "./Components/Morevenue/Morevenue6";
import Reserve from "./Components/Morevenue/Reserve";
import Venuegallary from "./Components/Venue/Venuegallary";
function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/wedding" element={<Wedding />} />

        <Route path="/faqqq" element={<Faqcontent />} />

        <Route path="/about" element={<Aboutpage />} />

        <Route path="/gallery" element={<Gallery />} />

        {/* <Route path="/costumes" element={<Costume />} /> */}

        <Route path="/host" element={<Hostsec />} />

        <Route path="/blog" element={<Blogpage />} />

        <Route path="/blogs" element={<Subblog />} />

        <Route path="/blogss" element={<Subblogss />} />

        <Route path="/christ" element={<Christians />} />

        <Route path="/contact" element={<Contacted />} />

        <Route path="/howhost" element={<Howtohost />} />

        <Route path="/login" element={<Login />} />

        <Route path="/sign" element={<Sign />} />

        <Route path="/venue" element={<Venue />} />

        <Route path="/morevenue1" element={<Morevenue1 />} />
        <Route path="/morevenue2" element={<Morevenue2 />} />
        <Route path="/morevenue3" element={<Morevenue3 />} />
        <Route path="/morevenue4" element={<Morevenue4 />} />
        <Route path="/morevenue5" element={<Morevenue5 />} />
        <Route path="/morevenue6" element={<Morevenue6 />} />
        <Route path="/reserve" element={<Reserve />} /> 
        <Route path="/venuegallary" element={<Venuegallary />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
