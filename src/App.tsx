import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import AppRoutes from "@/routes/AppRoutes";

function App() {
    return (
        <Router>
            <div className="flex flex-col justify-between w-full min-h-screen text-primary">
                <header>
                    <Navbar />
                </header>
                <main>
                    <AppRoutes />
                    <BackToTopButton />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
