import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'sonner';
import { Analytics } from "@vercel/analytics/react";

const inter = Bricolage_Grotesque({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
    title: "URL Shortener | Nishant Makwana",
    description: "URL Shortener built with Next.js & MongoDB — shorten, track, and analyze your links for free, forever!",
    icons: {
        icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔗</text></svg>",
    },
};

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <NextTopLoader
                        color="#10b981"
                        initialPosition={0.08}
                        crawlSpeed={200}
                        height={3}
                        crawl={true}
                        showSpinner={false}
                        easing="ease"
                        speed={200}
                        shadow="0 0 10px #10b981,0 0 5px #10b981"
                        template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                        zIndex={160000}
                        showAtBottom={false}

                    />
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                        <Analytics />
                        <Toaster />
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
