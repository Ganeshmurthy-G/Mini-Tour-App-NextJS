import PlaceDetails from "@/app/Components/PlaceDetails";
import { places } from "@/data";

export default async function SlugPage({ params }) {
    const { slug } = await params;

    // const response = await fetch(
    //     "http://localhost:3000/api/places"
    // );

    // const places = await response.json();

    const place = places.find(
        (place) => place.slug === slug
    );

    return (
        <>

            <PlaceDetails place={place} />

        </>
    );
}