import { Suspense } from "react";
import PlacesContent from "./PlacesContent";

export default function PlacesPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <PlacesContent />
    </Suspense>
  );
}