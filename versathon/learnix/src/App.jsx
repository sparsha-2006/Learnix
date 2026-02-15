import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Student from "./pages/student";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [quizSummary, setQuizSummary] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/student" element={<Student />} />

          {/* Quiz Route */}
          <Route
            path="/quiz"
            element={
              !quizSummary ? (
                <Quiz setQuizSummary={setQuizSummary} />
              ) : (
                <Result quizSummary={quizSummary} />
              )
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
