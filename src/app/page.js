import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="absolute inset-0 -z-10">
        <Image
          src="/tour2.avif"
          alt="Home background"
          fill
          className="object-cover opacity-90"
          quality={100}
          priority />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-64px)] text-white" style={{height:"80vh"}}>
        <h1 className="text-7xl font-bold text-blue-900">MINI TOUR GUIDE</h1>
        <p className="mt-4 text-xl text-blue-900 font-bold">I will guide you to amazing places </p>
        <button className="mt-4 bg-orange-400 font-bold">Choose Your Tour</button>
      </div>
    </>
  );
}