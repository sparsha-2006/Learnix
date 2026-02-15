import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Student from "./pages/Student";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import SubjectSelect from "./pages/SubjectSelect";
import DifficultySelect from "./pages/DifficultySelect";
import AvatarPage from "./pages/AvatarPage";
import Notification from "./pages/Notification";
import DailyChallenge from "./pages/DailyChallenge";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-900 text-white">
        <Navbar />

        <main className="flex-grow flex justify-center p-6">
          <Routes>
            {/* Auth */}
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Core Pages */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/student" element={<Student />} />
            <Route path="/avatar" element={<AvatarPage />} />
            <Route path="/notifications" element={<Notification />} />

            {/* Daily Challenge */}
            <Route path="/daily-challenge" element={<DailyChallenge />} />

            {/* Quiz Flow */}
            <Route
              path="/quiz"
              element={
                !selectedSubject ? (
                  <SubjectSelect setSelectedSubject={setSelectedSubject} />
                ) : !selectedDifficulty ? (
                  <DifficultySelect
                    setSelectedDifficulty={setSelectedDifficulty}
                  />
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
    </BrowserRouter>
  );
}

export default App;
