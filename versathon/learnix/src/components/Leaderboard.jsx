function Leaderboard({ xp }) {

  const students = [
    { name: "You", xp: xp },
    { name: "Rahul", xp: 200 },
    { name: "Ananya", xp: 150 }
  ];

  const sorted = [...students].sort((a, b) => b.xp - a.xp);

  return (
    <div>
      <h2>Leaderboard</h2>
      {sorted.map((student, index) => (
        <p key={index}>
          {index + 1}. {student.name} - {student.xp} XP
        </p>
      ))}
    </div>
  );
}

export default Leaderboard;
