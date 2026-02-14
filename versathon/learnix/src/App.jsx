import { useState } from "react";
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
        {!quizSummary ? (
          <Quiz setQuizSummary={setQuizSummary} />
        ) : (
          <Result quizSummary={quizSummary} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
