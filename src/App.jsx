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
import NotFound from "./pages/NotFound";
import { BASE_PATH } from "./assets/constants";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={`${BASE_PATH}/`} element={<Home />} />
        <Route path={BASE_PATH + "/inventory"} element={<Inventory />} />
        <Route
          path={`${BASE_PATH}/inventory/electronics`}
          element={<Electronics />}
        />
        <Route
          path={`${BASE_PATH}/inventory/clothing`}
          element={<Clothing />}
        />
        <Route
          path={`${BASE_PATH}/inventory/home-appliances`}
          element={<HomeAppliances />}
        />
        <Route path={`${BASE_PATH}/inventory/books`} element={<Books />} />
        <Route path={`${BASE_PATH}/sale`} element={<Sale />} />
        <Route path={`${BASE_PATH}/reviews`} element={<Reviews />} />
        <Route
          path={`${BASE_PATH}/privacy-policy`}
          element={<PrivacyPolicy />}
        />
        <Route
          path={`${BASE_PATH}/terms-of-service`}
          element={<TermsOfService />}
        />
        <Route path={`${BASE_PATH}/contact-us`} element={<ContactUs />} />
        <Route path={`${BASE_PATH}/search`} element={<SearchResults />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
