"use client";
import { useState } from "react";
import { places } from "@/data";
import PlaceCard from "../Components/PlaceCard";
import { useRouter } from "next/navigation";

export default function PlacesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();

  const filteredPlaces = places.filter(
    (place) =>
      place.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-5">
        <h1 className="text-4xl font-bold mb-5">
          Tourist Places
        </h1>

        <div className="flex gap-5">

          <input
            type="text"
            placeholder="Type to search the places"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-80 lg:w-96 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            className="p-3 border border-gray-300 rounded-lg"
            onChange={(e) => {
              const category = e.target.value;

              if (category) {
                router.push(`/places/category/${category}`);
              }
            }}
          >
            <option value="">Select Category</option>
            <option value="ooty">Ooty</option>
            <option value="kotagiri">Kotagiri</option>
            <option value="coonoor">Coonoor</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPlaces.length > 0 ? (filteredPlaces.map((place) => (<PlaceCard key={place.id} place={place} />)))
          : (<p>No Tourist Place found matching your search.</p>)}
      </div>

    </div>
  );
}