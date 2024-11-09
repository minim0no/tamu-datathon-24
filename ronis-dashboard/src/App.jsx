import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Statistics from "./pages/Statistics";
import Recommendations from "./pages/Recommendations";
import Chat from "./pages/Chat";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Chat />} />
                <Route path="/recommendations" element={<Recommendations />} />
                <Route path="/statistics" element={<Statistics />} />
            </Routes>
        </Router>
    );
}

export default App;
