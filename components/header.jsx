"use client";

import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 border-b dark:border-gray-800">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={theme === 'dark' ? "/logo-dark.png" : "/logo.png"}
            alt="welth logo"
            width={130}
            height={60}
            className="h-10 w-auto"
          />
        </Link>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="relative w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none"
            aria-label="Toggle dark mode"
          >
            <motion.span
              className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white dark:bg-yellow-300 shadow-md"
              animate={{
                x: theme === 'dark' ? 26 : 0,
              }}
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
            >
              {theme === 'dark' ? (
                <Sun className="w-3 h-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              ) : (
                <Moon className="w-3 h-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              )}
            </motion.span>
          </button>

          {/* Dashboard Links */}
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline" className="gap-2">
                <LayoutDashboard size={16} />
                <span className="hidden sm:inline">Dashboard</span>
              </Button>
            </Link>

            <Link href="/transaction/create">
              <Button className="gap-2">
                <PenBox size={16} />
                <span className="hidden sm:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          {/* Auth Buttons */}
          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;
