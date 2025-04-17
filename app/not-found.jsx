// app/not-found.jsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Logo - Replace with your actual logo */}
        <div className="mb-8">
          <Link href="/">
            <Image
              src="/logo.png" // Fixed path (removed the extra dot)
              alt="Welth Logo"
              width={120}
              height={40}
              className="mx-auto h-10 w-auto dark:invert"
            />
          </Link>
        </div>

        {/* Rest of your 404 page content remains the same */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg blur opacity-20 dark:opacity-30"></div>
          <div className="relative bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              404
            </div>
            <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
              Wealth Not Found
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              The page you're looking for doesn't exist or has been moved.
              Let's get you back to growing your wealth.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default" className="bg-gradient-to-r from-blue-600 to-teal-500">
            <Link href="/">
              Return Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/dashboard">
              Go to Dashboard
            </Link>
          </Button>
        </div>

        {/* Financial Tip */}
        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/50">
          <p className="text-sm text-blue-700 dark:text-blue-300">
            <span className="font-semibold">Financial Tip:</span> Did you know regularly 
            reviewing your portfolio can increase returns by up to 15%?
          </p>
        </div>
      </div>
    </div>
  );
}