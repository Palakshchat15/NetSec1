import { Link } from "react-router-dom";

export default function BookingSuccess() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
      <p className="text-gray-400 mb-6">
        Your seats have been successfully booked.
      </p>

      <Link
        to="/"
        className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg"
      >
        Go Home
      </Link>
    </div>
  );
}
