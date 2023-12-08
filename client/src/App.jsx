import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  Navbar,
  SingUpPage,
  HomePage,
  ContactPage,
  AboutPage,
  ServicesPage,
} from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/singup" element={<SingUpPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
