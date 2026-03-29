import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import AIChatbot from "./components/AIChatbot"; // ✅ chatbot

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Favourites from "./pages/Favourites";
import AuthPage from "./pages/AuthPage";
import PlanTrip from "./pages/PlanTrip";

import MainLayout from "./layouts/MainLayouts";

function App() {
  return (
    <AuthProvider>
      <Router>

        {/* ROUTES */}
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:id" element={<DestinationDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/itinerary" element={<PlanTrip />} />
          </Route>
        </Routes>

        {/* 🔥 GLOBAL AI CHATBOT (VISIBLE EVERYWHERE) */}
        <AIChatbot />

      </Router>
    </AuthProvider>
  );
}

export default App;