import Link from "next/link";
import { Globe, Mail, Share2, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200/80 dark:border-gray-800 bg-white/50 dark:bg-black/40 backdrop-blur-md mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-5">
          
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="text-2xl font-bold text-indigo-700 font-heading">
              B<span className="text-primary">LOGIFY</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
              Discover thoughtful articles on modern web development, software design, emerging tech trends, and digital lifestyle.
            </p>
            <div className="flex items-center gap-3 pt-2 text-gray-500 dark:text-gray-400">
              <Link
                href="/"
                target="_blank"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600 transition-colors"
              >
                <Globe className="w-4 h-4" />
              </Link>
              <Link
                href="mailto:contact@blogify.com"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600 transition-colors"
                aria-label="Community"
              >
                <MessageCircle className="w-4 h-4" />
              </Link>
              <Link
                href="/blogs"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600 transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  All Blogs
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Popular Topics
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/categories/Web%20Development" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/categories/TypeScript" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  TypeScript
                </Link>
              </li>
              <li>
                <Link href="/categories/SEO" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="/categories/Tutorials" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Guides & Tutorials
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Legal & Policy
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/blogs" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Cookie Settings
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-200/60 dark:border-gray-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} BLOGIFY. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;