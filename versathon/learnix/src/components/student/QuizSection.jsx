function QuizSection({ setXp }) {

  const handleSubmit = () => {
    alert("Quiz Completed! +50 XP");
    setXp(prev => prev + 50);
  };

  return (
    <div>
      <h2>Quiz</h2>
      <p>Sample Question: 5 + 5 = ?</p>
      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
}

export default QuizSection;
