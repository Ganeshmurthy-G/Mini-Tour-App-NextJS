import PlaceDetails from "@/app/Components/PlaceDetails";
import { places } from "@/data";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const place = places.find(
        (place) => place.slug === slug
    );

    if (!place) {
        return {
            title: "Place Not Found | Mini Tourist App",
            description: "The requested place does not exist.",
        };
    }

    return {
        title: `${place.name} | Mini Tourist App`,
        description: place.description,
    };
}

export default async function SlugPage({ params }) {
    const { slug } = await params;

    // const response = await fetch(
    //     "http://localhost:3000/api/places"
    // );

    // const places = await response.json();
    

    // Simulate a slow API call
    await new Promise((resolve) =>
        setTimeout(resolve, 2000)
    );

    // To check whether error.js is triggered and working fine
    // throw new Error("Failed to load place details");

    const place = places.find(
        (place) => place.slug === slug
    );

    if (!place) {
        notFound();
    }

    return (
        <>
            <PlaceDetails place={place} />
        </>
    );
}