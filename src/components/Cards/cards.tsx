import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { Layout, Smartphone, PenTool, Code } from "lucide-react";

export default function Cards() {
  const services = [
    {
      title: "UX & UI",
      description:
        "Projetando interfaces que são intuitivas, eficientes e agradáveis de usar.",
    },
    {
      title: "Web & Mobile",
      description:
        "Transformando ideias em experiências excepcionais de aplicativos web e mobile.",
    },
    {
      title: "Design & Criação",
      description:
        "Criando designs visualmente impressionantes que se conectam com seu público.",
    },
    {
      title: "Desenvolvimento",
      description:
        "Dando vida à sua visão com as últimas tendências em tecnologia e design.",
    },
  ];

  return (
    <section className="container flex flex-col items-center justify-center gap-20 py-32">
      <h2 className="max-w-sm text-balance text-center font-Playfair text-3xl font-bold drop-shadow-xl md:max-w-4xl md:text-5xl">
        Crie soluções eficientes para seu negócio e tenha resultados
        impactantes.
      </h2>
      <div className="relative flex w-full items-center justify-center gap-2">
        <p className="absolute rounded-full bg-background px-4 py-2 font-Playfair shadow-sm">
          Como?
        </p>
        <Separator className="h-px w-full" />
      </div>

      <div className="grid max-w-sm grid-cols-2 gap-4 md:max-w-full md:grid-cols-4">
        {services.map((service) => (
          <Card key={service.title} className="max-w-sm">
            <CardHeader>
              {service.title === "UX & UI" && <Layout className="md:size-10" />}
              {service.title === "Web & Mobile" && (
                <Smartphone className="md:size-10" />
              )}
              {service.title === "Design & Criação" && (
                <PenTool className="md:size-10" />
              )}
              {service.title === "Desenvolvimento" && (
                <Code className="md:size-10" />
              )}
            </CardHeader>
            <CardContent>
              <CardTitle className="font-Playfair font-semibold md:text-3xl">
                {service.title}
              </CardTitle>
            </CardContent>
            <CardFooter>
              <CardDescription className="md:text-lg">
                {service.description}
              </CardDescription>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
