import { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const register = async () => {
    try {
      await api.post("/auth/register", form);
      navigate("/login");
    } catch (err) {
      setError("Registration failed");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

        {error && (
          <p className="text-red-400 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        <input
          className="w-full bg-neutral-900 border border-neutral-700 p-2 rounded mb-3 text-white focus:outline-none focus:border-red-500"
          placeholder="Name"
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full bg-neutral-900 border border-neutral-700 p-2 rounded mb-3 text-white focus:outline-none focus:border-red-500"
          placeholder="Email"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="w-full bg-neutral-900 border border-neutral-700 p-2 rounded mb-4 text-white focus:outline-none focus:border-red-500"
          type="password"
          placeholder="Password"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />

        <button
          onClick={register}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition"
        >
          Register
        </button>
      </div>
    </div>
  );
}
