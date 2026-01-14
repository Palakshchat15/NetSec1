import { Link } from "react-router-dom";

export default function ListingCard({ item }) {
  return (
    <Link
      to={`/details/${item._id}`}
      className="bg-neutral-800 border border-neutral-700 rounded-xl overflow-hidden hover:border-red-500 transition"
    >
      <img
        src={item.image}
        alt={item.title}
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-sm">
          {item.title}
        </h3>
        <p className="text-xs text-gray-400 mt-1">
          {item.venue}
        </p>
        <p className="mt-2 font-bold text-red-500">
          ₹{item.price}
        </p>
      </div>
    </Link>
  );
}
