import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Student from "./pages/student";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import SubjectSelect from "./pages/SubjectSelect";
import DifficultySelect from "./pages/DifficultySelect";
import AvatarPage from "./pages/AvatarPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [quizSummary, setQuizSummary] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex justify-center">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/student" element={<Student />} />
          <Route path="/avatar" element={<AvatarPage />} />

          <Route
            path="/quiz"
            element={
              !selectedSubject ? (
                <SubjectSelect setSelectedSubject={setSelectedSubject} />
              ) : !selectedDifficulty ? (
                <DifficultySelect setSelectedDifficulty={setSelectedDifficulty} />
              ) : !quizSummary ? (
                <Quiz
                  selectedSubject={selectedSubject}
                  selectedDifficulty={selectedDifficulty}
                  setQuizSummary={setQuizSummary}
                />
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
