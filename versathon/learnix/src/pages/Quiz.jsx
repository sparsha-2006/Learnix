import { useState } from "react";
import { questions } from "../data/questions";

function Quiz({ selectedSubject, selectedDifficulty, setQuizSummary }) {

  const filteredQuestions = questions
    .filter(
      (q) =>
        q.subject === selectedSubject &&
        q.difficulty === selectedDifficulty
    )
    .slice(0, 5);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const currentQuestion = filteredQuestions[currentIndex];
  const selectedOption = selectedAnswers[currentIndex];

  const handleOptionSelect = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentIndex]: option,
    });
  };

  const handleNext = () => {
    if (currentIndex + 1 < filteredQuestions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Quiz Finished — Calculate Score & Topic Stats
      let score = 0;
      let topicStats = {};

      filteredQuestions.forEach((q, index) => {
        const userAnswer = selectedAnswers[index];

        if (!topicStats[q.topic]) {
          topicStats[q.topic] = { correct: 0, total: 0 };
        }

        topicStats[q.topic].total++;

        if (userAnswer === q.answer) {
          score++;
          topicStats[q.topic].correct++;
        }
      });

      setQuizSummary({
        score,
        total: filteredQuestions.length,
        topicStats,
      });
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex justify-center py-20 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-12 w-full max-w-2xl">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Question {currentIndex + 1} of {filteredQuestions.length}
          </h2>

          <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
            {selectedSubject} • {selectedDifficulty.toUpperCase()}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-2 rounded-full mb-8">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
            style={{
              width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%`,
            }}
          ></div>
        </div>

        {/* Question */}
        <h3 className="text-xl mb-8 text-gray-700 leading-relaxed">
          {currentQuestion.question}
        </h3>

        {/* Options */}
        <div className="flex flex-col gap-5">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={`w-full py-4 rounded-xl border 
  ${
    selectedOption === option
      ? "bg-blue-600 text-white border-blue-600"
      : "bg-gray-50 text-gray-800 hover:bg-blue-50 border-gray-200"
  }
  transition duration-300 shadow-sm`}

            >
              {option}
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-10 flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`px-6 py-3 rounded-xl font-semibold 
              ${
                currentIndex === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-600 text-white hover:bg-gray-700"
              }
              transition duration-300`}
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className={`px-8 py-3 rounded-xl font-semibold 
              ${
                selectedOption
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }
              transition duration-300`}
          >
            {currentIndex + 1 === filteredQuestions.length
              ? "Finish Quiz"
              : "Next"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default Quiz;
