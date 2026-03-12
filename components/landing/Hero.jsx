import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Star } from "lucide-react";
import IfLoggedInElse from "../helpers/ifLoggedInElse";

export default function Hero() {
  return (
    <section className="py-20 sm:mt-5 px-6 max-w-6xl mx-auto">
      <div className="grid gap-6 max-w-5xl mx-auto text-center place-items-center">
        <h1 className="font-semibold text-4xl md:text-5xl !leading-tight lg:text-6xl">
          Shorten, share &{" "}
          <span className="underline underline-offset-[5px] decoration-emerald-500">
            track
          </span>{" "}
          your links with{" "}
          <span className="underline underline-offset-[5px] decoration-emerald-500">
            ease
          </span>
        </h1>
        <p className="text-foreground/80 mt-2 md:text-xl text-base max-w-2xl">
          A powerful URL Shortener with detailed analytics — track clicks,
          devices, locations & more. Free forever.
        </p>
        <div className="flex items-center sm:justify-center flex-wrap gap-3 mt-3">
          <Link
            href="https://github.com/nishantmakwanaa"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "flex items-center gap-1",
            )}
          >
            View on GitHub
            <Star className="h-3.5 w-3.5" />
          </Link>
          <IfLoggedInElse
            ifNot={
              <Link
                href="/sign-up"
                className={buttonVariants({ variant: "default" })}
              >
                Get Started
              </Link>
            }
            ifUser={
              <Link
                href="/dashboard"
                className={buttonVariants({ variant: "default" })}
              >
                Dashboard
              </Link>
            }
          />
        </div>
      </div>
      <div className="w-fit h-fit mt-20 border-4 sm:mt-32 border-input rounded-lg overflow-hidden shadow-lg">
        <img src="/d-preview-2.png" alt="Hero Image" />
      </div>
    </section>
  );
}
