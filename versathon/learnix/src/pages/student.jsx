// import { useState } from "react";

// import StudentProfile from "../components/student/StudentProfile";
// import Courses from "../components/student/Courses";
// import QuizSection from "../components/student/QuizSection";
// import Events from "../components/student/Events";
// import Leaderboard from "../components/Leaderboard";

// function Student() {
//   const [active, setActive] = useState("courses");
//   const [xp, setXp] = useState(0);

//   const level = Math.floor(xp / 100);

//   return (
//     <div style={{ padding: "20px" }}>

//       {/* Motivational Text */}
//       <h1 style={{ textAlign: "center" }}>
//         🚀 Learn Today. Lead Tomorrow.
//       </h1>

//       {/* Profile */}
//       <StudentProfile xp={xp} level={level} />

//       {/* Navigation Buttons */}
//       <div style={{ marginTop: "20px" }}>
//         <button onClick={() => setActive("courses")}>Courses</button>
//         <button onClick={() => setActive("quiz")}>Quiz</button>
//         <button onClick={() => setActive("events")}>Events</button>
//         <button onClick={() => setActive("leaderboard")}>Leaderboard</button>
//       </div>

//       {/* Section Render */}
//       <div style={{ marginTop: "30px" }}>
//         {active === "courses" && <Courses />}
//         {active === "quiz" && <QuizSection setXp={setXp} />}
//         {active === "events" && <Events />}
//         {active === "leaderboard" && <Leaderboard xp={xp} />}
//       </div>

//     </div>
//   );
// }

// export default Student;
import { useState } from "react";

function Student() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div>
            <h1>Welcome Back 👨‍💻</h1>
            <p>Branch: CSE | Semester: 5 | CGPA: 8.7</p>
          </div>
        );

      case "subjects":
        return (
          <div>
            <h2>📚 Subjects</h2>
            <div className="subjects-grid">
              <div className="subject-card">
                <h3>Data Structures</h3>
                <p>18CS32 | Credits: 4</p>
              </div>
              <div className="subject-card">
                <h3>Operating Systems</h3>
                <p>18CS53 | Credits: 4</p>
              </div>
              <div className="subject-card">
                <h3>DBMS</h3>
                <p>18CS54 | Credits: 4</p>
              </div>
            </div>
          </div>
        );

      case "internals":
        return (
          <div>
            <h2>📝 Internal Marks</h2>
            <p>Data Structures - 18/20</p>
            <p>Operating Systems - 16/20</p>
            <p>DBMS - 19/20</p>
          </div>
        );

      case "timetable":
        return (
          <div>
            <h2>📅 Timetable</h2>
            <p>Monday - DS, OS</p>
            <p>Tuesday - DBMS, AI</p>
          </div>
        );

      case "results":
        return (
          <div>
            <h2>📊 Results</h2>
            <p>SGPA: 8.7</p>
          </div>
        );

      case "settings":
        return (
          <div>
            <h2>⚙️ Settings</h2>
            <p>Profile Settings</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="student-layout">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">🎓 VTU Portal</h2>
        <ul>
          <li onClick={() => setActiveTab("dashboard")}>🏠 Dashboard</li>
          <li onClick={() => setActiveTab("subjects")}>📚 Subjects</li>
          <li onClick={() => setActiveTab("internals")}>📝 Internals</li>
          <li onClick={() => setActiveTab("timetable")}>📅 Timetable</li>
          <li onClick={() => setActiveTab("results")}>📊 Results</li>
          <li onClick={() => setActiveTab("settings")}>⚙️ Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {renderContent()}
      </main>

    </div>
  );
}

export default Student;

