import { Twitter, Github, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-indigo-950 pt-16 pb-8 border-t border-indigo-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-indigo-900/50">
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Mindie</h3>
            <p className="text-indigo-300 mb-6">
              Your personal journaling companion with privacy and elegance at
              its core.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Product</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/features"
                  className="text-indigo-300 hover:text-white"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-indigo-300 hover:text-white"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-indigo-300 hover:text-white"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/roadmap"
                  className="text-indigo-300 hover:text-white"
                >
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/blog" className="text-indigo-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-indigo-300 hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-indigo-300 hover:text-white"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link href="/help-center" className="text-indigo-300 hover:text-white">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-indigo-300 hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-indigo-300 hover:text-white"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-indigo-300 hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-indigo-300 hover:text-white"
                >
                  Terms & Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-indigo-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Mindie. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-indigo-400 hover:text-white text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-indigo-400 hover:text-white text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-indigo-400 hover:text-white text-sm"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
