import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Professionals from "./pages/Professionals";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
 <Route
   path="/contact" element={<Contact />} /></Routes>
    </BrowserRouter>
  );
}

export default App;