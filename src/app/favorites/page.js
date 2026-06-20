"use client";

import { places } from "@/data";
import PlaceCard from "../Components/PlaceCard";
import { useEffect, useState } from "react";

export default function FavoritesPage() {

    const [favoriteIds, setFavoriteIds] = useState([]);

    useEffect(() => {
        const favorites =
            JSON.parse(
                localStorage.getItem("favorites")
            ) || [];

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFavoriteIds(favorites);
    }, []);

    const favoritePlaces =
        places.filter((place) =>
            favoriteIds.includes(place.id)
        );

    const handleFavoriteChange = (placeId) => {
        setFavoriteIds((prev) =>
            prev.filter((id) => id !== placeId)
        );
    };

    return (
        <>
            <div className="p-8">
                <h1 className="text-4xl font-bold mb-8">
                    ❤️Favorite Places
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {favoritePlaces.length > 0 ? (
                        favoritePlaces.map((place) => (
                            <PlaceCard
                                key={place.id}
                                place={place}
                                handleFavoriteChange={handleFavoriteChange}
                            />
                        ))
                    ) : (
                        <p className="text-gray-500 text-lg">
                            You dont have any favorite places yet❤️
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}