"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PlaceCard = ({ place, onFavoriteChange }) => {
  // const [isFavorite, setIsFavorite] = useState(() => {
  //   if (typeof window === "undefined") return false;
  //   const favorites =
  //     JSON.parse(
  //       localStorage.getItem("favorites")
  //     ) || [];
  //   return favorites.includes(place.id);
  // });

  const [isFavorite, setIsFavorite] =
    useState(false);

  const handleFavorite = () => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    let updated;

    if (favorites.includes(place.id)) {
      updated = favorites.filter(
        (id) => id !== place.id
      );
      setIsFavorite(false);
    } else {
      updated = [...favorites, place.id];
      setIsFavorite(true);
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );
  };

  useEffect(() => {
    const favorites =
      JSON.parse(
        localStorage.getItem("favorites")
      ) || [];

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsFavorite(
      favorites.includes(place.id)
    );
  }, [place.id]);

  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <Image
        src={place.image}
        alt={place.name}
        width={400}
        height={250}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">
          {place.name}
        </h2>

        <p className="text-gray-600">
          {place.location}
        </p>
        <div className="flex gap-3">

          <Link
            href={`/places/${place.slug}`}
            className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            View Details
          </Link>

          <button
            onClick={handleFavorite}
            className="mt-4 bg-blue-500 text-white px-2 rounded"
          >
            {isFavorite
              ? "❤️ Remove Favorite"
              : "🤍 Add to Favorites"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default PlaceCard;