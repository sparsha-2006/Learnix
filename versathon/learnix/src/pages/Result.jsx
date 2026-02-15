function Result({ quizSummary }) {
  const { score, total, topicStats } = quizSummary;
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="min-h-screen flex justify-center items-start py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      
      <div className="w-full px-16">

        {/* MAIN RESULT CARD */}
        <div className="bg-white rounded-3xl shadow-2xl p-16 text-center  max-w-full">

          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            🎯 Quiz Result
          </h1>

          <div className="text-6xl font-extrabold text-blue-600 mb-4">
            {percentage}%
          </div>

          <p className="text-xl text-gray-600 mb-2">
            You scored {score} out of {total}
          </p>

          {percentage === 100 && (
            <p className="text-green-600 font-semibold mt-2">
              🔥 Perfect Score! Outstanding performance!
            </p>
          )}

          {percentage >= 70 && percentage < 100 && (
            <p className="text-blue-600 font-semibold mt-2">
              👏 Great job! Keep pushing!
            </p>
          )}

          {percentage < 70 && (
            <p className="text-red-600 font-semibold mt-2">
              📚 Keep practicing — you’ll improve!
            </p>
          )}
        </div>

        {/* TOPIC PERFORMANCE */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          📊 Topic Performance
        </h2>

        <div className="grid md:grid-cols-3 gap-12">

          {Object.entries(topicStats).map(([topic, data]) => {
            const accuracy = Math.round(
              (data.correct / data.total) * 100
            );

            let badgeColor = "";
            let message = "";

            if (accuracy >= 75) {
              badgeColor = "bg-green-100 text-green-700";
              message = "Strong Area 💪";
            } else if (accuracy >= 50) {
              badgeColor = "bg-yellow-100 text-yellow-700";
              message = "Keep Practicing 👍";
            } else {
              badgeColor = "bg-red-100 text-red-700";
              message = "Needs Improvement ⚠️";
            }

            return (
              <div
                key={topic}
                className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {topic}
                </h3>

                <p className="text-gray-600 mb-3">
                  Accuracy: <span className="font-bold">{accuracy}%</span>
                </p>

                <span
                  className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${badgeColor}`}
                >
                  {message}
                </span>
              </div>
            );
          })}
        </div>

        {/* RETAKE BUTTON */}
        <div className="text-center mt-14">
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300"
          >
            🔄 Retake Quiz
          </button>
        </div>

      </div>
    </div>
  );
}

export default Result;
