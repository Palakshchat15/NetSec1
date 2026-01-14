import { useEffect, useState } from "react";
import { api } from "../services/api";
import CityCard from "../components/CityCard";

export default function Home() {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("/cities").then(res => setCities(res.data));
  }, []);

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-2">
        Discover events near you
      </h1>
      <p className="text-gray-400 mb-6">
        Search and choose your city
      </p>

      <div className="mb-8 max-w-md">
        <input
          type="text"
          placeholder="Search city..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full bg-neutral-800 border border-neutral-700 p-3 rounded-lg text-white focus:outline-none focus:border-red-500"
        />
      </div>

      {filteredCities.length === 0 ? (
        <p className="text-gray-400">No cities found</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredCities.map(city => (
            <CityCard key={city._id} city={city} />
          ))}
        </div>
      )}
    </div>
  );
}
