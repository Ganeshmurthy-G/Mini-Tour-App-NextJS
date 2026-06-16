"use client";

export default function Error({
  error,
  reset,
}) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-red-500">
        Something went wrong!
      </h1>

      <p>{error.message}</p>

      <button
        onClick={() => reset()}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Try Again
      </button>
    </div>
  );
}