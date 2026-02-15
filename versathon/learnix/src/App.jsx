import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DailyChallenge from "./pages/DailyChallenge";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 text-white">
        <Navbar />

        <div className="p-10">
          <Routes>
            <Route path="/" element={<DailyChallenge />} />
            <Route path="/daily-challenge" element={<DailyChallenge />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
