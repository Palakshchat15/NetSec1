import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [seats, setSeats] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get(`/listings/${id}`).then(res => setEvent(res.data));
  }, []);

  const bookNow = async () => {
    try {
      setLoading(true);
      await api.post("/bookings", {
        eventId: id,
        seats,
      });
      navigate("/booking-success");
    } catch {
      alert("Please login to book");
    } finally {
      setLoading(false);
    }
  };

  if (!event) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-white">
      <img
        src={event.image}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />

      <h1 className="text-3xl font-bold">{event.title}</h1>
      <p className="text-gray-400 mt-2">{event.description}</p>

      <div className="mt-6 flex items-center gap-6">
        <input
          type="number"
          min="1"
          value={seats}
          onChange={e => setSeats(Number(e.target.value))}
          className="w-20 bg-neutral-800 border border-neutral-700 p-2 rounded"
        />

        <p className="text-lg font-semibold">
          Total: ₹{seats * event.price}
        </p>

        <button
          onClick={bookNow}
          disabled={loading}
          className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg font-semibold"
        >
          {loading ? "Booking..." : "Book Now"}
        </button>
      </div>
    </div>
  );
}
