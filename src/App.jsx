import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Sale from "./pages/Sale";
import Reviews from "./pages/Reviews";
import Electronics from "./pages/Electronics";
import Clothing from "./pages/Clothing";
import HomeAppliances from "./pages/HomeAppliances";
import Books from "./pages/Books";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ContactUs from "./pages/ContactUs";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/electronics" element={<Electronics />} />
        <Route path="/inventory/clothing" element={<Clothing />} />
        <Route path="/inventory/home-appliances" element={<HomeAppliances />} />
        <Route path="/inventory/books" element={<Books />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
