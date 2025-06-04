import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { ScatterText } from "./ScatterText";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen overflow-hidden">
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
