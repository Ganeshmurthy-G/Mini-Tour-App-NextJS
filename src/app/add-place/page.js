"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddPlacePage() {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [bestTime, setBestTime] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [message, setMessage] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const slug = name
            .toLowerCase()
            .trim()
            .replaceAll(" ", "-");

        const placeData = {
            name,
            location,
            description,
            besttime: bestTime,
            image,
            category,
            slug,
        };

        const response = await fetch("/api/places", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(placeData),
        });

        const result = await response.json();

        if (result.success) {
            setMessage("Place added successfully!");

            setName("");
            setLocation("");
            setDescription("");
            setBestTime("");
            setImage("");
            setCategory("");
        }

        router.push("/places");
    };

    return (
        <div className="max-w-3xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">
                Add Tourist Place
            </h1>

            {
                message && (
                    <p className="bg-green-100 text-green-700 p-3 rounded-lg mb-4">
                        {message}
                    </p>
                )
            }

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input
                    type="text"
                    placeholder="Place Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border p-3 rounded-lg mt-2"
                />

                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full border p-3 rounded-lg"
                />

                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full border p-3 rounded-lg"
                    rows={4}
                />

                <input
                    type="text"
                    placeholder="Best Time To Visit"
                    value={bestTime}
                    onChange={(e) => setBestTime(e.target.value)}
                    className="w-full border p-3 rounded-lg"
                />

                <input
                    type="text"
                    placeholder="Image URL (Example: /ooty.jpg)"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full border p-3 rounded-lg"
                />

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full border p-3 rounded-lg"
                >
                    <option value="">Select Category</option>
                    <option value="ooty">Ooty</option>
                    <option value="kotagiri">Kotagiri</option>
                    <option value="coonoor">Coonoor</option>
                </select>

                <button
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
                    type="submit"
                >
                    Add Place
                </button>
            </form>
        </div>
    );
}