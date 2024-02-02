import { BrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/navbar/Navbar";
import Developers from "./pages/Developers";
import Footer from "./pages/Footer";
import Join from "./pages/Join";
import Loading from "./pages/Header";
import Partners from "./pages/Partners";
import Properties from "./pages/Properties";
import Subscribe from "./pages/Subscribe";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Loading />
        <Join />
        <Partners />
        <Developers />
        
        <AboutUs />
        <Subscribe />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
