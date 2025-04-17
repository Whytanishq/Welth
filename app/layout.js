import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";
import { checkUser } from "@/lib/checkUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welth",
  description: "One stop Finance Platform",
};

export default async function RootLayout({ children }) {
  await checkUser();

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <main className="min-h-screen">{children}</main>
            <footer className="bg-blue-50 py-8 dark:bg-gray-800">
              <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-4">
                  <div className="text-center">
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      <span className="font-medium">created by Tanishq Saraf</span> 
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 italic">
                      Shipping code by day, debugging by night — crafting solutions through hands-on building.;
                    </p>
                    <div className="flex justify-center gap-4 mb-5">
                      <Link 
                        href="https://www.instagram.com/whytanishqq/profilecard/?igsh=dzRxZHVoaGRqbnI3" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                      </Link>
                      <Link 
                        href="https://www.linkedin.com/in/tanishq-saraf-04b0a8288" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </Link>
                      <Link 
                        href="https://github.com/Whytanishq" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                  <div className="w-full pt-0 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-center text-gray-500 dark:text-gray-400 text-xs">
                      © {new Date().getFullYear()} Welth. All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </footer>
            <Toaster position="top-center" richColors />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}