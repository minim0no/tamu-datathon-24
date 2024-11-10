<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Statistics from "./pages/Statistics";
import Recommendations from "./pages/Recommendations";
import NavBar from "./components/NavBar";
import Chat from "./components/ChatBox";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="font-MostraNuova w-full h-full relative flex flex-col justify-between">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Statistics />} />
                    <Route
                        path="/recommendations"
                        element={<Recommendations />}
                    />
                </Routes>
                <Footer/>
            </Router>
            <Chat />
        </div>
    );
}

export default App;
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Statistics from "./pages/Statistics";
import Recommendations from "./pages/Recommendations";
import NavBar from "./components/NavBar";
import Chat from "./components/ChatBox";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="font-MostraNuova w-full h-full relative flex flex-col justify-between">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Statistics />} />
                    <Route
                        path="/recommendations"
                        element={<Recommendations />}
                    />
                </Routes>
                <Footer />
            </Router>
            <Chat />
        </div>
    );
}

export default App;
>>>>>>> 29b7ba8d7893c6a007464c764d0eb6f167d7d32f
