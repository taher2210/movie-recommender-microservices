import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { logout } = useAuth();

  return (
    <nav className="flex justify-between items-center p-6 bg-zinc-950 border-b border-zinc-800">
      <Link to="/" className="text-white text-2xl font-bold">
        MovieRec
      </Link>

      <div className="flex gap-6">
        <Link to="/" className="text-zinc-300 hover:text-white">
          Home
        </Link>

        <Link to="/watchlist" className="text-zinc-300 hover:text-white">
          Watchlist
        </Link>

        <button
          onClick={logout}
          className="text-red-500 hover:text-red-400"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
