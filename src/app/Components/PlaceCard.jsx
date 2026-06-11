import Image from "next/image";
import Link from "next/link";

const PlaceCard = ({ place }) => {
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

        <Link
          href={`/places/${place.slug}`}
          className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PlaceCard;