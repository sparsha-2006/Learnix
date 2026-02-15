function Navbar() {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Learnix</h1>
      <nav className="flex gap-4 text-sm">
        <span className="cursor-pointer hover:text-blue-400">Quiz</span>
        <span className="cursor-pointer hover:text-blue-400">Dashboard</span>
        <span className="cursor-pointer hover:text-blue-400">Profile</span>
      </nav>
    </header>
  );
}

export default Navbar;
