
import { useState } from "react";

function Student() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: "🏠" },
    { id: "subjects", label: "Subjects", icon: "📚" },
    { id: "internals", label: "Internals", icon: "📝" },
    { id: "timetable", label: "Timetable", icon: "📅" },
    { id: "results", label: "Results", icon: "📊" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Welcome Back 👨‍💻</h1>
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <p className="text-gray-300">Branch: CSE</p>
              <p className="text-gray-300">Semester: 5</p>
              <p className="text-gray-300">CGPA: 8.7</p>
            </div>
          </div>
        );

      case "subjects":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-6">📚 Subjects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {["Data Structures", "Operating Systems", "DBMS"].map(
                (subject, index) => (
                  <div
                    key={index}
                    className="bg-slate-800 p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer"
                  >
                    <h3 className="text-xl font-semibold">{subject}</h3>
                    <p className="text-gray-400 mt-2">Credits: 4</p>
                  </div>
                )
              )}
            </div>
          </div>
        );

      case "internals":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">📝 Internal Marks</h2>
            <div className="space-y-4">
              {[
                { name: "Data Structures", marks: 18 },
                { name: "Operating Systems", marks: 16 },
                { name: "DBMS", marks: 19 },
              ].map((item, index) => (
                <div key={index}>
                  <p>{item.name}</p>
                  <div className="w-full bg-slate-700 rounded-full h-3 mt-2">
                    <div
                      className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${item.marks * 5}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "timetable":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">📅 Timetable</h2>
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
              <p>Monday — DS, OS</p>
              <p>Tuesday — DBMS, AI</p>
            </div>
          </div>
        );

      case "results":
        return (
          <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">📊 Results</h2>
            <p className="text-lg">SGPA: <span className="text-blue-400 font-bold">8.7</span></p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-900 text-white">

      {/* Sidebar */}
      <aside className="w-64 bg-slate-950 p-6 shadow-xl hidden md:block">
        <h2 className="text-2xl font-bold mb-8 text-blue-400">
          🎓 VTU Portal
        </h2>

        <ul className="space-y-3">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-3 rounded-lg cursor-pointer transition-all duration-200 flex items-center space-x-3
                ${
                  activeTab === tab.id
                    ? "bg-blue-600 shadow-lg"
                    : "hover:bg-slate-800 hover:translate-x-1"
                }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {renderContent()}
      </main>

    </div>
  );
}

export default Student;
