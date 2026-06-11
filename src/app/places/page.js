"use client";
import { useState } from "react";
import { places } from "@/data";
import PlaceCard from "../Components/PlaceCard";

export default function PlacesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlaces = places.filter(
    (place) =>
      place.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold mb-5">
          Tourist Places
        </h1>

        <input
          type="text"
          placeholder="Type to search the places"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "20%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginBottom: "15px",
          }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPlaces.length > 0 ? (filteredPlaces.map((place) => (<PlaceCard key={place.id} place={place} />)))
          : (<p>No Tourist Place found matching your search.</p>)}
      </div>

    </div>
  );
}