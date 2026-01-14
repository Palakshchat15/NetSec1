import { useParams, Link } from "react-router-dom";

export default function City() {
  const { id } = useParams();

  const categories = [
    { label: "Events", type: "event" },
    { label: "Movies", type: "movie" },
    { label: "Shows", type: "show" },
    { label: "Workshops", type: "workshop" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">
        Explore categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categories.map(c => (
          <Link
            key={c.type}
            to={`/listings/${id}/${c.type}`}
            className="bg-neutral-800 border border-neutral-700 py-6 rounded-xl text-center hover:border-red-500 transition"
          >
            {c.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
