import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import ButtonClipboard from "@/components/ui/button-clipboard";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import myLinks from "@/data/myLinks";

export default function Links() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-background">
      <Card className="relative w-full max-w-sm">
        <CardHeader className="flex flex-row gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/raphaeleliass.png" />
            <AvatarFallback>
              <Skeleton className="h-full w-full" />
            </AvatarFallback>
          </Avatar>

          <span>
            <CardTitle>Raphael Elias</CardTitle>
            <CardDescription className="text-xs">
              Desenvolvedor Front-end React | NextJS
            </CardDescription>
          </span>
        </CardHeader>

        <CardContent className="flex flex-col gap-4 shadow-lg">
          {myLinks.map((link, index) => (
            <p key={index}>
              {link.title === "Email" ? (
                <>
                  <Button
                    key={link.title}
                    variant={"outline"}
                    className="w-full md:hidden"
                  >
                    <a
                      href={link.url}
                      rel="noreferrer noopener"
                      target="_blank"
                      className="h-full w-full"
                    >
                      {link.title}
                    </a>
                  </Button>

                  <ButtonClipboard
                    className="hidden w-full md:flex"
                    classCopy="right-16"
                  />
                </>
              ) : (
                <Button key={link.title} variant={"outline"} className="w-full">
                  <a
                    href={link.url}
                    rel="noreferrer noopener"
                    target="_blank"
                    className="h-full w-full"
                  >
                    {link.title}
                  </a>
                </Button>
              )}
            </p>
          ))}
        </CardContent>

        <CardFooter className="flex flex-col">
          <CardDescription className="text-xs">
            
          </CardDescription>
        </CardFooter>
      </Card>
    </main>
  );
}
