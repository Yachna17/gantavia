import { Link } from "react-router-dom";
import { MapPin, Star, Heart, Calendar, Users } from "lucide-react";
import { useState, useEffect } from "react";
import Card from "../common/Card";

const DestinationCard = ({
  destination,
  viewMode = "grid",
  onBookNow, // ✅ NEW PROP
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favourites")) || [];
    const exists = storedFavs.some((item) => item.id === destination.id);
    setIsFavorite(exists);
  }, [destination.id]);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const storedFavs = JSON.parse(localStorage.getItem("favourites")) || [];

    if (isFavorite) {
      const updatedFavs = storedFavs.filter(
        (item) => item.id !== destination.id
      );
      localStorage.setItem("favourites", JSON.stringify(updatedFavs));
      setIsFavorite(false);
    } else {
      const updatedFavs = [...storedFavs, destination];
      localStorage.setItem("favourites", JSON.stringify(updatedFavs));
      setIsFavorite(true);
    }
  };

  // ✅ BOOK NOW CLICK
  const handleBookClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onBookNow) onBookNow(destination);
  };

  // ================= LIST VIEW =================
  if (viewMode === "list") {
    return (
      <Link to={`/destinations/${destination.id}`} className="group">
        <Card className="flex flex-col md:flex-row gap-6 h-full hover:shadow-xl transition-all duration-300">

          <div className="w-full md:w-64 h-48 md:h-64 shrink-0 rounded-lg overflow-hidden">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between py-2">
            <div>
              <h3 className="text-2xl font-bold">{destination.name}</h3>
              <p className="text-gray-500">{destination.country}</p>

              <p className="text-gray-600 mt-2">
                {destination.description}
              </p>
            </div>

            {/* 🔥 ACTIONS */}
            <div className="flex items-center justify-between mt-4">
              <span className="text-xl font-bold text-blue-600">
                ₹{destination.price}
              </span>

              <div className="flex gap-2">

                {/* ❤️ Favorite */}
                <button
                  onClick={toggleFavorite}
                  className="p-2 bg-gray-100 rounded-lg"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isFavorite
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400"
                    }`}
                  />
                </button>

                {/* 🔥 Book Now */}
                <button
                  onClick={handleBookClick}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Book Now
                </button>

              </div>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  // ================= GRID VIEW =================
  return (
    <Link to={`/destinations/${destination.id}`}>
      <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">

        <div className="relative">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* ❤️ Favorite */}
          <button
            onClick={toggleFavorite}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow"
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite
                  ? "fill-red-500 text-red-500"
                  : "text-gray-400"
              }`}
            />
          </button>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold">{destination.name}</h3>
          <p className="text-gray-500">{destination.country}</p>

          <p className="text-gray-600 text-sm mt-2">
            {destination.description}
          </p>

          {/* 🔥 ACTIONS */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-blue-600 font-bold">
              ₹{destination.price}
            </span>

            <button
              onClick={handleBookClick}
              className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition"
            >
              Book Now
            </button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default DestinationCard;