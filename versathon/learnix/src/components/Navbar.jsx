import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-16 bg-slate-950 flex items-center justify-between px-8 border-b border-slate-800">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-400">
        Learnix
      </div>

      {/* Links */}
      <div className="flex gap-8 text-sm text-slate-300">
        <Link
          to="/daily-challenge"
          className="text-blue-400 border-b-2 border-blue-400 pb-1"
        >
          Daily Challenge
        </Link>

        <Link to="/quiz" className="hover:text-white">
          Quiz
        </Link>

        <Link to="/avatar" className="hover:text-white">
          Avatar
        </Link>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <span className="cursor-pointer">🔔</span>
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
          👤
        </div>
      </div>
    </div>
  );
};

export default Navbar;
