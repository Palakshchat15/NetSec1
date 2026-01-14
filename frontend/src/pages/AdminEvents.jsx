import { useEffect, useState } from "react";
import { api } from "../services/api";
import AdminEditEvent from "../components/AdminEditEvent";

export default function AdminEvents() {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);

  const loadEvents = () => {
    api.get("/listings").then(res => setEvents(res.data));
  };

  useEffect(() => {
  api.get("/listings/admin/all").then(res => {
    setEvents(res.data);
  });
}, []);


  const deleteEvent = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    await api.delete(`/listings/${id}`);
    loadEvents();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-white">
      <h2 className="text-2xl font-bold mb-6">Manage Events</h2>

      {editingEvent && (
        <AdminEditEvent
          event={editingEvent}
          onClose={() => setEditingEvent(null)}
          onUpdated={loadEvents}
        />
      )}

      <div className="space-y-4">
        {events.map(event => (
          <div
            key={event._id}
            className="bg-neutral-800 border border-neutral-700 rounded-xl p-4 flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-400">
                {event.type} · ₹{event.price}
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setEditingEvent(event)}
                className="text-blue-400 hover:text-blue-500"
              >
                Edit
              </button>

              <button
                onClick={() => deleteEvent(event._id)}
                className="text-red-400 hover:text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
