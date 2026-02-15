import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);

  // Hide navbar on auth pages
  const hideOnPaths = ["/login", "/signup"];
  if (hideOnPaths.includes(location.pathname)) return null;

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Quiz", path: "/quiz" },
    { name: "Daily Challenge", path: "/daily-challenge" },
    { name: "Avatar", path: "/avatar" },
  ];

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/dashboard" className="flex items-center">
            <img src={logo} alt="Learnix Logo" className="h-10" />
          </Link>

          {/* Center Nav */}
          <div className="hidden md:flex flex-1 justify-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition ${
                  location.pathname === item.path
                    ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-6 relative">

            {/* Notifications */}
            <div
              className="cursor-pointer"
              onClick={() => navigate("/notifications")}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/8338/8338801.png"
                className="w-10 h-10 bg-white rounded-full p-2"
                alt="Notifications"
              />
            </div>

            {/* Avatar */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/456/456212.png"
                  className="w-8 h-8 invert"
                  alt="Profile"
                />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-44 bg-white text-gray-700 rounded-xl shadow-xl py-2 z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setProfileOpen(false)}
                  >
                    Profile
                  </Link>

                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      console.log("Logout logic");
                    }}
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
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
};

export default Navbar;
