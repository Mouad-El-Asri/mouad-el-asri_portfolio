import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import TermsOfService from "./pages/TermsOfService";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <Router>
		<Navbar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/terms-of-service" element={<TermsOfService />} />
		</Routes>
		<BackToTopButton />
		<Footer />
	</Router>
  )
}

export default App;
