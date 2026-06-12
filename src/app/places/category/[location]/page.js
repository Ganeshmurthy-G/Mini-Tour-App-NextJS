import PlaceCard from "@/app/Components/PlaceCard";
import { places } from "@/data";

export default async function CategoryPage({ params }) {
    const { location } = await params;

    // const response = await fetch(
    //     "http://localhost:3000/api/places"
    // );

    // const places = await response.json();

    const filteredPlaces = places.filter(
        (place) => place.category === location
    );

    return (
        <>
            <div className="p-8">
                <h1 className="text-4xl font-bold mb-5">
                    Tourist Places In - {location}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPlaces.length > 0 ? (filteredPlaces.map((place) => (<PlaceCard key={place.id} place={place} />)))
                        : (<p>No Tourist Place found matching your route.</p>)}
                </div>
            </div>
        </>
    );
}