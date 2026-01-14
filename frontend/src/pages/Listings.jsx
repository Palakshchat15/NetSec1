import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import ListingCard from "../components/ListingCard";

export default function Listings() {
  const { cityId, type } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/listings", {
      params: { cityId, type }
    }).then(res => setData(res.data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 capitalize">
        {type}s in your city
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map(item => (
          <ListingCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
