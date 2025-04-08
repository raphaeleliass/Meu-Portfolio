import BackButton from "@/components/layouts/Home/BackButton";
import AboutPortfolio from "@/components/layouts/Portfolio/AboutPortfolio";
import AllProjects from "@/components/layouts/Portfolio/AllProjects";
import Spotlight from "@/components/layouts/Portfolio/Spotlight";
import { Asterisk } from "lucide-react";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center">
      <BackButton />

      <div className="custom-section flex w-full flex-row items-center justify-between">
        <h1 className="text-5xl">Portfólio</h1>

        <Asterisk size={60} />
      </div>
      <Spotlight />
      <AllProjects />
      <AboutPortfolio />
    </main>
  );
}
