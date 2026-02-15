import { useState } from "react";
import { questions } from "../data/questions";

function Quiz({ setQuizSummary }) {
  const [index, setIndex] = useState(0);
  const [summary, setSummary] = useState([]);

  const handleAnswer = (option) => {
    const correct = option === questions[index].answer;

    const updatedSummary = [
      ...summary,
      { topic: questions[index].topic, correct },
    ];

    setSummary(updatedSummary);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setQuizSummary(updatedSummary);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h2 className="text-2xl mb-6">
        {questions[index].question}
      </h2>

      <div className="flex flex-col gap-4">
        {questions[index].options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt)}
            className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
