import Link from "next/link";
import Image from "next/image";
import { places } from "@/data";

export default function PlacesPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-5">
        Tourist Places
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {places.map((place) => (
          <div
            key={place.id}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <Image
              src={place.image}
              alt={place.name}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">
              <h2 className="text-2xl font-bold">
                {place.name}
              </h2>

              <p className="text-gray-600 mt-2">
                {place.location}
              </p>

              <p className="text-gray-600 mt-2">
                {place.name},{place.location}
              </p>

              <p>Have a goodtime!</p>

              <Link
                href={`/places/${place.id}`}
                className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}