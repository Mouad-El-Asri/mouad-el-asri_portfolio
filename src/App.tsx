import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TermsOfService from "./pages/TermsOfService";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Router>
            <div className="flex flex-col justify-between min-h-screen text-primary">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/terms-of-service"
                        element={<TermsOfService />}
                    />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
                <BackToTopButton />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
