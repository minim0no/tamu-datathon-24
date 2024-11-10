import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Statistics from "./pages/Statistics";
import Recommendations from "./pages/Recommendations";
import Chat from "./pages/Chat";
import NavBar from "./components/NavBar";

function App() {
    return (
      <div className="font-MostraNuova w-full h-full">
          <Router>
              <NavBar/>
              <Routes>
                  <Route path="/" element={<Chat />} />
                  <Route path="/recommendations" element={<Recommendations />} />
                  <Route path="/statistics" element={<Statistics />} />
              </Routes>
          </Router>
        </div>
    );
}

export default App;
