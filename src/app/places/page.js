import { places } from "@/data";
import PlaceCard from "../Components/PlaceCard";

export default function PlacesPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-5">
        Tourist Places
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {places.map((place) => (
          <PlaceCard
            key={place.id}
            place={place}
          />
        ))}
      </div>
    </div>
  );
}