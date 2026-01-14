import { useContext } from "react";
import { CityContext } from "../context/CityContext";
import { useNavigate } from "react-router-dom";

export default function CityCard({ city }) {
  const { selectCity } = useContext(CityContext);
  const navigate = useNavigate();

  const handleClick = () => {
    selectCity(city);
    navigate(`/city/${city._id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer group"
    >
      <div className="bg-neutral-800 border border-neutral-700 rounded-xl overflow-hidden hover:border-red-500 transition">
        <img
          src={city.image}
          alt={city.name}
          className="h-28 w-full object-cover"
        />
        <div className="p-3 text-center">
          <h3 className="text-sm font-semibold">
            {city.name}
          </h3>
        </div>
      </div>
    </div>
  );
}
