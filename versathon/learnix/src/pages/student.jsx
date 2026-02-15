
import { useState } from "react";

function Student() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "subjects", label: "course" },
    { id: "internals", label: "Internals" },
    { id: "timetable", label: "Timetable" },
    { id: "results", label: "Results"},
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        
        return (
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Hello Shiva</h1>
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <p className="text-gray-300">Branch: CSE</p>
              <p className="text-gray-300">Semester: 4</p>
              <p className="text-gray-300">CGPA: 8.7</p>
            </div>
          </div>
        );

      case "subjects":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Course</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {["Data Structures", "Operating Systems", "Computer Communication and Networking","Maths"].map(
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
      <h2 className="text-2xl font-semibold mb-6">Internal Marks</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            name: "Data Structures",
            cie1: 18,
            cie2: 17,
            cie3: 19,
          },
          {
            name: "Operating Systems",
            cie1: 16,
            cie2: 18,
            cie3: 17,
          },
          {
            name: "Maths",
            cie1: 15,
            cie2: 16,
            cie3: 18,
          },
          {
            name: "Computer Communication & Networking",
            cie1: 19,
            cie2: 18,
            cie3: 20,
          },
        ].map((subject, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-lg font-semibold mb-4">
              {subject.name}
            </h3>

            {["cie1", "cie2", "cie3"].map((cie, i) => (
              <div key={i} className="mb-4 group relative">
                <p className="text-sm mb-1">
                  CIE {i + 1}
                </p>

                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div
                    className="bg-blue-500 h-3 rounded-full transition-all duration-700"
                    style={{ width: `${subject[cie] * 5}%` }}
                  ></div>
                </div>

                {/* Hover Tooltip */}
                <span className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition text-sm bg-blue-600 px-2 py-1 rounded-md">
                  {subject[cie]} / 20
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );


      case "timetable":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4"> Timetable</h2>
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
              <p>Monday — DS, OS</p>
              <p>Tuesday — CCN, AI,</p>
                <p>Wednesday — DS, Maths</p>
                <p>Thursday — OS, CCN</p>
                <p>Friday — AI, Maths</p>
            </div>
          </div>
        );

      case "results":
        return (
          <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4"> Results</h2>
            <p className="text-lg">SGPA: <span className="text-blue-400 font-bold">8.7</span></p>
          </div>
        );

      default:
        return null;
    }
  };

 return (
  <div className="flex bg-slate-900 text-white min-h-screen">

    {/* Sidebar */}
    <aside className="fixed top-0 left-0 h-screen w-64 bg-slate-950 p-6 shadow-xl hidden md:block">
      <h2 className="text-2xl font-bold mb-8 text-blue-400">
        STUDY SPACE
      </h2>

      <ul className="space-y-3">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`p-3 rounded-lg cursor-pointer transition-all duration-200
              ${
                activeTab === tab.id
                  ? "bg-blue-600 shadow-lg"
                  : "hover:bg-slate-800"
              }`}
          >
            {tab.label}
          </li>
        ))}
      </ul>
    </aside>

    {/* Main Content */}
    <div className="flex-1 ml-0 md:ml-64 p-8">
      {renderContent()}
    </div>

  </div>
);

}

export default Student;
