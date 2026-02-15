import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [profileOpen, setProfileOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Quiz", path: "/quiz" },
    { name: "Daily Challenge", path: "/daily-challenge" },
    { name: "Avatar ", path: "/avatar" },
  ];

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/dashboard"
            className="text-2xl font-bold text-blue-400"
          >
            Learnix
          </Link>

          {/* CENTER NAV ITEMS */}
          <div className="hidden md:flex flex-1 justify-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition duration-200 ${
                  location.pathname === item.path
                    ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center space-x-6 relative">

            {/* Notification */}
            <div className="relative cursor-pointer">
              <span className="text-xl">🔔</span>
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                2
              </span>
            </div>

            {/* Avatar */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-10 h-10 bg-blue-500 hover:bg-blue-600 transition rounded-full flex items-center justify-center"
              >
                👤
              </button>

              {/* DROPDOWN */}
              {profileOpen && (
                <div className="absolute right-0 mt-3 w-44 bg-white text-gray-700 rounded-xl shadow-xl py-2 z-50">

                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                    onClick={() => setProfileOpen(false)}
                  >
                    Profile
                  </Link>

                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      console.log("Logout logic here");
                    }}
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 transition"
                  >
                    Logout
                  </button>

                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
