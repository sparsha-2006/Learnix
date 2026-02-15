import { useNavigate } from "react-router-dom";

const DailyChallenge = () => {
  const navigate = useNavigate();

  // ---- Mock Data ----
  const challenge = {
    title: "Defeat the Recursion Mini-Boss",
    topic: "Recursion",
    total: 5,
    completed: 2,
    baseXP: 150,
    currentStreak: 3,
    bestStreak: 6,
  };

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const weeklyActivity = [true, true, false, true, true, true, false];
  const todayIndex = 6;

  // ---- XP Multiplier Logic ----
  let multiplier = 1;
  if (challenge.currentStreak >= 5) multiplier = 2;
  else if (challenge.currentStreak >= 3) multiplier = 1.5;

  const finalXP = Math.floor(challenge.baseXP * multiplier);
  const progress = (challenge.completed / challenge.total) * 100;

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-sky-500">
          Daily Challenge
        </h1>
        <p className="text-slate-400 pt-3">
          Consistency boosts your rewards.
        </p>
      </div>

      {/* Challenge Card */}
      <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold">
          {challenge.title}
        </h2>

        <div className="mt-3 space-y-1 text-slate-300">
          <p>Topic: {challenge.topic}</p>
          <p>Questions: {challenge.total}</p>
          <p>Base XP: {challenge.baseXP}</p>
          <p>Streak Multiplier: ×{multiplier}</p>
          <p className="font-bold text-lg text-white">
            Final Reward: {finalXP} XP
          </p>
        </div>

        {/* Start Challenge Button */}
        <button
          onClick={() =>
            navigate("/quiz", {
              state: {
                selectedSubject: challenge.topic,
                selectedDifficulty: "Medium",
              },
            })
          }
          className="mt-4 px-6 py-2 bg-sky-600 hover:bg-sky-800 rounded-lg transition"
        >
          Start Challenge
        </button>
      </div>

      {/* Progress */}
      <div className="bg-slate-800 p-6 rounded-xl">
        <p className="mb-2 text-slate-300">
          Progress: {challenge.completed}/{challenge.total}
        </p>

        <div className="w-full h-3 bg-slate-700 rounded-full">
          <div
            className="h-3 bg-green-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Streak Overview */}
      <div className="bg-slate-800 p-6 rounded-xl flex justify-between items-center">
        <div>
          <p className="text-slate-400 text-sm">Current Streak</p>
          <div className="flex items-center gap-2">
            <p className="text-3xl font-bold">{challenge.currentStreak} days</p>
            <img
              src="https://cdn-icons-png.flaticon.com/128/16329/16329139.png"
              className="h-10 invert"
              alt="Streak Icon"
            />
          </div>
        </div>

        <div className="text-right">
          <p className="text-slate-400 text-sm">Best Streak</p>
          <p className="text-2xl font-bold text-sky-400">{challenge.bestStreak} days</p>
        </div>
      </div>

      {/* Compact Streak Strip */}
      <div className="bg-slate-800 p-4 rounded-xl">
        <p className="text-sm text-slate-400 mb-3">Last 7 days activity</p>
        <div className="flex justify-between items-center">
          {days.map((day, index) => {
            const completed = weeklyActivity[index];
            const isToday = index === todayIndex;
            return (
              <div key={day} className="relative flex flex-col items-center gap-1 group">
                <span className="text-xs text-slate-400">{day}</span>
                <div
                  className={`
                    h-4 w-4 rounded-full
                    ${completed ? "bg-green-500" : "bg-slate-600"}
                    ${isToday ? "ring-2 ring-blue-400" : ""}
                    ${completed && isToday ? "animate-pulse" : ""}
                  `}
                />
                <span className="absolute top-10 scale-0 group-hover:scale-100 transition bg-black text-xs px-2 py-1 rounded whitespace-nowrap">
                  {completed ? "Completed" : "Missed"}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Smart Tip */}
      <div className="bg-slate-950 border-l-4 border-sky-400 p-4 rounded-lg text-slate-300">
        Tip: Higher streaks unlock XP multipliers and faster progress.
      </div>

    </div>
  );
};

export default DailyChallenge;
