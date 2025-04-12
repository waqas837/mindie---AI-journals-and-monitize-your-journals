"use client";
import { useState, useEffect } from "react";
import { Menu, X, BookOpen, User, Bell, Search, Moon, Sun } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-client";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };
    getSession();

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Implement actual dark mode toggle functionality here
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${"bg-indigo-950/90 backdrop-blur-lg shadow-lg"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <BookOpen className="h-8 w-8 text-purple-400" />
                <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
                  Mindie
                </span>
              </a>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a
                href="/features"
                className="text-indigo-200 hover:text-white transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="/pricing"
                className="text-indigo-200 hover:text-white transition-colors duration-200"
              >
                Pricing
              </a>
              <a
                href="/about"
                className="text-indigo-200 hover:text-white transition-colors duration-200"
              >
                About
              </a>
              <a
                href="/blog"
                className="text-indigo-200 hover:text-white transition-colors duration-200"
              >
                Blog
              </a>

              {/* Search button */}
              <button
                className="text-indigo-200 hover:text-white transition-colors duration-200"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Theme toggle */}
              <button
                onClick={toggleDarkMode}
                className="text-indigo-200 hover:text-white transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>

              {/* User or login/signup */}
              {user ? (
                <div className="flex items-center space-x-4">
                  <button className="text-indigo-200 hover:text-white transition-colors duration-200">
                    <Bell className="h-5 w-5" />
                  </button>
                  <div className="relative group">
                    <button className="flex items-center text-sm rounded-full focus:outline-none">
                      <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                    </button>
                    <div className="absolute right-0 w-48 mt-2 origin-top-right bg-indigo-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="py-1">
                        <a
                          href="/dashboard"
                          className="block px-4 py-2 text-sm text-indigo-200 hover:bg-indigo-800 hover:text-white"
                        >
                          Dashboard
                        </a>
                        <a
                          href="/profile"
                          className="block px-4 py-2 text-sm text-indigo-200 hover:bg-indigo-800 hover:text-white"
                        >
                          Profile
                        </a>
                        <a
                          href="/settings"
                          className="block px-4 py-2 text-sm text-indigo-200 hover:bg-indigo-800 hover:text-white"
                        >
                          Settings
                        </a>
                        <hr className="border-indigo-700" />
                        <button
                          onClick={() => supabase.auth.signOut()}
                          className="block w-full text-left px-4 py-2 text-sm text-indigo-200 hover:bg-indigo-800 hover:text-white"
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <a
                    href="/login"
                    className="text-indigo-100 hover:text-white transition-colors duration-200"
                  >
                    Log in
                  </a>
                  <a
                    href="/signup"
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                  >
                    Sign up
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Theme toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-indigo-200 hover:text-white transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={toggleMenu}
              className="text-indigo-200 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-indigo-950/90 backdrop-blur-lg">
          <a
            href="/features"
            className="block px-3 py-2 text-base font-medium text-indigo-200 hover:text-white hover:bg-indigo-900 rounded-md"
          >
            Features
          </a>
          <a
            href="/pricing"
            className="block px-3 py-2 text-base font-medium text-indigo-200 hover:text-white hover:bg-indigo-900 rounded-md"
          >
            Pricing
          </a>
          <a
            href="/about"
            className="block px-3 py-2 text-base font-medium text-indigo-200 hover:text-white hover:bg-indigo-900 rounded-md"
          >
            About
          </a>
          <a
            href="/blog"
            className="block px-3 py-2 text-base font-medium text-indigo-200 hover:text-white hover:bg-indigo-900 rounded-md"
          >
            Blog
          </a>
          {user ? (
            <>
              <a
                href="/dashboard"
                className="block px-3 py-2 text-base font-medium text-indigo-200 hover:text-white hover:bg-indigo-900 rounded-md"
              >
                Dashboard
              </a>
              <a
                href="/profile"
                className="block px-3 py-2 text-base font-medium text-indigo-200 hover:text-white hover:bg-indigo-900 rounded-md"
              >
                Profile
              </a>
              <a
                href="/settings"
                className="block px-3 py-2 text-base font-medium text-indigo-200 hover:text-white hover:bg-indigo-900 rounded-md"
              >
                Settings
              </a>
              <button
                onClick={() => supabase.auth.signOut()}
                className="block w-full text-left px-3 py-2 text-base font-medium text-indigo-200 hover:text-white hover:bg-indigo-900 rounded-md"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <a
                href="/login"
                className="block px-3 py-2 text-base font-medium text-indigo-200 hover:text-white hover:bg-indigo-900 rounded-md"
              >
                Log in
              </a>
              <a
                href="/signup"
                className="block px-3 py-2 text-base font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md"
              >
                Sign up
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
