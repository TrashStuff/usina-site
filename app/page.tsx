import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { ScatterText } from "./ScatterText";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen overflow-hidden">
      <div className="absolute top-0">
        <video
          autoPlay
          playsInline
          muted
          loop
          className="blur-md saturate-20 brightness-50 object-cover min-h-screen w-full md:h-full md:object-[center_40%]"
        >
          <source src="/usina.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="z-10 absolute top-0 right-0 h-full w-2/3 opacity-20">
        <Noise />
      </div>

      <NavBar currentPage="home" />

      <div className="text-slate-100 font-sans text-9xl grow h-screen flex items-center">
        <div className="z-20 text-center">
          <ScatterText>USINA</ScatterText>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Noise() {
  return (
    <svg className="h-full w-full">
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.3"
          numOctaves="5"
          stitchTiles="stitch"
        />
      </filter>

      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  );
}
