function Result({ quizSummary }) {
  if (!quizSummary || quizSummary.length === 0) {
    return <div className="p-6">No data available</div>;
  }

  const stats = {};

  quizSummary.forEach(({ topic, correct }) => {
    if (!stats[topic]) stats[topic] = { total: 0, correct: 0 };
    stats[topic].total++;
    if (correct) stats[topic].correct++;
  });

  const strong = [];
  const weak = [];

  Object.keys(stats).forEach((topic) => {
    const accuracy = (stats[topic].correct / stats[topic].total) * 100;
    if (accuracy >= 70) strong.push(topic);
    else weak.push(topic);
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Personalized Feedback 💡</h1>

      <div className="bg-gray-800 p-4 rounded-lg">
        <p className="text-green-400">
          ✅ Strong Areas: {strong.length ? strong.join(", ") : "None"}
        </p>

        <p className="text-red-400 mt-2">
          ⚠ Needs Improvement: {weak.length ? weak.join(", ") : "None"}
        </p>

        <p className="mt-4 text-yellow-300">
          📌 Suggestion: Practice weak topics using Smart Revision Mode
        </p>
      </div>
    </div>
  );
}

export default Result;
