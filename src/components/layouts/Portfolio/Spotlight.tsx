// ui imports
import { Button } from "@/components/ui/button";

export default function Spotlight() {
  return (
    <section className="custom-section">
      <article className="flex flex-col gap-7">
        {Array.from({ length: 2 }, (_, index) => (
          <div
            className="group relative aspect-video overflow-hidden rounded-2xl bg-zinc-300"
            key={index}
          >
            <div className="bg-background/30 absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-lg transition-all group-hover:opacity-100">
              <Button variant={"secondary"}>acessar</Button>
              <Button variant={"link"}>acessar</Button>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
