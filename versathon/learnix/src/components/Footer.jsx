import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  const hideOnPaths = ["/login", "/signup"];

  if (hideOnPaths.includes(location.pathname)) return null;

  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>© 2026 Learnix. All rights reserved.</p>
    </footer>
  );
}

export default Footer;