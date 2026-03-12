import { Link2 } from "lucide-react";
import { ModeToggle } from "../modetoggle";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="px-6 md:px-20 lg:px-32 py-10 text-center grid place-content-center">
            <div className="grid gap-2 place-items-center">
                <span><Link2 className="h-5 w-5" /></span>
                <h3 className="text-lg -mb-1 -mt-2">URL Shortener</h3>
                <p className="text-muted-foreground text-sm sm:text-base">Created by Nishant Makwana</p>
            </div>
            <div className="mt-2 flex gap-3 items-center justify-center">
                <Link href="https://github.com/nishantmakwanaa" className="underline underline-offset-[5px] decoration-emerald-500 text-sm">GitHub</Link>
                <Link href="https://linkedin.com/in/nishantmakwanaa" className="underline underline-offset-[5px] decoration-emerald-500 text-sm">LinkedIn</Link>
                <Link href="https://nishantmakwanaa.lovable.app" className="underline underline-offset-[5px] decoration-emerald-500 text-sm">Portfolio</Link>
            </div>
            <div className="mt-4">
                <ModeToggle />
            </div>
        </footer>
    )
};