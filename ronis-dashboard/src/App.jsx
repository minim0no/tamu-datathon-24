import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Statistics from "./pages/Statistics";
import Recommendations from "./pages/Recommendations";
import NavBar from "./components/NavBar";
import Chat from "./components/ChatBox";

function App() {
    return (
        <div className="font-MostraNuova w-full h-full relative">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Statistics />} />
                    <Route
                        path="/recommendations"
                        element={<Recommendations />}
                    />
                </Routes>
            </Router>
            <Chat />
        </div>
    );
}

export default App;
