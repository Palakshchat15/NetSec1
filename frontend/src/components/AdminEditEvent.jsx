import { useState } from "react";
import { api } from "../services/api";

export default function AdminEditEvent({ event, onClose, onUpdated }) {
  const [form, setForm] = useState({ ...event });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const updateEvent = async () => {
    await api.put(`/listings/${event._id}`, form);
    onClose();
    onUpdated();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 w-full max-w-lg text-white">
        <h3 className="text-xl font-bold mb-4">Edit Event</h3>

        <div className="space-y-3">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full bg-neutral-900 border border-neutral-700 p-2 rounded"
            placeholder="Title"
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full bg-neutral-900 border border-neutral-700 p-2 rounded"
          >
            <option value="event">Event</option>
            <option value="movie">Movie</option>
            <option value="show">Show</option>
            <option value="workshop">Workshop</option>
          </select>

          <input
            name="venue"
            value={form.venue}
            onChange={handleChange}
            className="w-full bg-neutral-900 border border-neutral-700 p-2 rounded"
            placeholder="Venue"
          />

          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full bg-neutral-900 border border-neutral-700 p-2 rounded"
            placeholder="Price"
          />

          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            className="w-full bg-neutral-900 border border-neutral-700 p-2 rounded"
            placeholder="Image URL"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="3"
            className="w-full bg-neutral-900 border border-neutral-700 p-2 rounded"
            placeholder="Description"
          />

          <div className="flex justify-end gap-4 pt-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              Cancel
            </button>

            <button
              onClick={updateEvent}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
