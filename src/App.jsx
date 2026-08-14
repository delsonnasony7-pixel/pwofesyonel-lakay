import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Professionals from "./pages/Professionals";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";

import ProfessionalProfile from "./pages/ProfessionalProfile";
import ProfessionalContact from "./pages/ProfessionalContact";
import ProfessionalSetup from "./pages/ProfessionalSetup";
import IdentityVerification from "./components/IdentityVerification";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/professionals"
          element={<Professionals />}
        />

        <Route
          path="/categories"
          element={<Categories />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* PROFESSIONAL PROFILE */}
        <Route
          path="/professional/:id"
          element={<ProfessionalProfile />}
        />

        {/* PROFESSIONAL CONTACT */}
        <Route
          path="/professional/:id/contact"
          element={<ProfessionalContact />}
        />
<Route
  path="/professional-setup"
  element={<ProfessionalSetup />}
/>

<Route
  path="/identity-verification"
  element={<IdentityVerification />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;