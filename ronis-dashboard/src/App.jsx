import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Statistics from "./pages/Statistics";
import Recommendations from "./pages/Recommendations";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div className="font-MostraNuova w-full h-full">
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
        </div>
    );
}

export default App;
