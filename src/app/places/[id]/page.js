import Image from "next/image";
import { places } from "@/data";

const PlaceDetailPage = async ({ params }) => {

  const { id } = await params;

  const place = places.find(
    (place) => place.id === Number(id)
  );

  if (!place) {
    return <h1>Place Not Found</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto p-8">

      <Image
        src={place.image}
        alt={place.name}
        width={1000}
        height={500}
        className="w-full h-[500px] object-cover rounded-lg"
      />

      <h1 className="text-5xl font-bold mt-6">
        {place.name}
      </h1>

      <p className="text-xl text-gray-600 mt-2">
        📍{place.location}
      </p>

      <div className="mt-2 space-y-2">
        <p>
          ⭐ Rating: {place.rating ? place.rating : "5"}
        </p>

        <p className="mt-2">
          📝 {place.description}
        </p>

        <p>
          🗓 Best Time To Visit: {place.besttime ? place.besttime : "Mid-Day"}
        </p>
      </div>

    </div>
  );
};

export default PlaceDetailPage;