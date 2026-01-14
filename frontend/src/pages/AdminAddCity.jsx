import { useState } from "react";
import { api } from "../services/api";

export default function AdminAddCity() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!name || !image) {
      alert("All fields required");
      return;
    }

    try {
      setLoading(true);
      await api.post("/cities", { name, image });
      alert("City added successfully");
      setName("");
      setImage("");
    } catch (err) {
      alert("Failed to add city");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10 text-white">
      <h2 className="text-2xl font-bold mb-6">Add City</h2>

      <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 space-y-4">
        <input
          className="w-full bg-neutral-900 border border-neutral-700 p-2 rounded"
          placeholder="City name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          className="w-full bg-neutral-900 border border-neutral-700 p-2 rounded"
          placeholder="Image URL"
          value={image}
          onChange={e => setImage(e.target.value)}
        />

        <button
          onClick={submit}
          disabled={loading}
          className="w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg font-semibold"
        >
          {loading ? "Adding..." : "Add City"}
        </button>
      </div>
    </div>
  );
}
