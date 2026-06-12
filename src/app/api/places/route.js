import { places } from "@/data";

export async function GET() {
  console.log("API Execution Starts");
  return Response.json(places);
}

export async function POST(request) {
  const body = await request.json();

  console.log("Received Data:", body);

  return Response.json({
    success: true,
    message: "Place added successfully",
    data: body,
  });
}