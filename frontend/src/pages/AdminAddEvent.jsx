import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function AdminAddEvent() {
  const [cities, setCities] = useState([]);
  const [form, setForm] = useState({
    title: "",
    type: "event",
    cityId: "",
    date: "",
    venue: "",
    price: "",
    image: "",
    description: ""
  });

  useEffect(() => {
    api.get("/cities").then(res => setCities(res.data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    try {
      await api.post("/listings", form);
      alert("Event added successfully");
    } catch (err) {
      alert("Failed to add event");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <div className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">
          Add Event
        </h1>

        <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 space-y-4">

          <input
            name="title"
            placeholder="Event Title"
            className="w-full bg-neutral-900 border border-neutral-700 p-2 rounded"
            onChange={handleChange}
          />

          <select
            name="type"
            className="w-full bg-neutral-900 border border-neutral-700 p-2 rounded"
            onChange={handleChange}
          >
            <option value="event">Event</option>
            <option value="movie">Movie</option>
            <option value="show">Show</option>
            <option value="workshop">Workshop</option>
          </select>

          <select
            name="cityId"
            className="w-full bg-neutral-900 border border-neutral-700 p-2 rounded"
            onChange={handleChange}
          >
            <option value="">Select City</option>
            {cities.map(city => (
              <option key={city._id} value={city._id}>
                {city.name}
              </option>
            ))}
          </select>

          <input
            type="date"
            name="date"
            className="w-full bg-neutral-900 border border-neutral-700 p-2 rounded"
            onChange={handleChange}
          />

          <input
            name="venue"
            placeholder="Venue"
            className="w-full bg-neutral-900 border border-neutral-700 p-2 rounded"
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-full bg-neutral-900 border border-neutral-700 p-2 rounded"
            onChange={handleChange}
          />

          <input
            name="image"
            placeholder="Image URL"
            className="w-full bg-neutral-900 border border-neutral-700 p-2 rounded"
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            rows="3"
            className="w-full bg-neutral-900 border border-neutral-700 p-2 rounded"
            onChange={handleChange}
          />

          <button
            onClick={submit}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Add Event
          </button>

        </div>
      </div>
    </div>
  );
}
