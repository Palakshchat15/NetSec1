import { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/"); 
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        {error && (
          <p className="text-red-400 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        <input
          className="w-full bg-neutral-900 border border-neutral-700 p-2 rounded mb-3 text-white focus:outline-none focus:border-red-500"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          className="w-full bg-neutral-900 border border-neutral-700 p-2 rounded mb-4 text-white focus:outline-none focus:border-red-500"
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
