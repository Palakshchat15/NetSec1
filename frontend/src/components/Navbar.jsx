import { Link, useNavigate, useLocation } from "react-router-dom";

function getUserFromToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch {
    return null;
  }
}

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); // forces re-render
  const user = getUserFromToken();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold text-red-500">
          CityBuzz
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>

          {/* admin only */}
          {user?.role === "admin" && (
            <>
              <Link
                to="/admin/add-event"
                className="text-yellow-400 hover:text-yellow-300"
              >
                Add Event
              </Link>
              <Link
                to="/admin/events"
                className="text-yellow-400 hover:text-yellow-300"
              >
                Manage Events
              </Link>
              <Link to="/admin/add-city" className="text-yellow-400">
                Add City
              </Link>
            </>
          )}
          
          {!user && (
            <>
              <Link to="/login" className="text-gray-300 hover:text-white">
                Login
              </Link>
              <Link to="/register" className="text-gray-300 hover:text-white">
                Register
              </Link>
            </>
          )}

          {user && (
            <button
              onClick={logout}
              className="text-gray-300 hover:text-red-400"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
