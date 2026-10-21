import Link from "next/link";
import Navlink from "./Navlink";
import MobileMenu from "./MobileMenu";
import ModeToggle from "./ModeToggle";
import Logout from "./Logout";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

async function Navbar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/30 backdrop-blur-md dark:bg-black/30">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
     
        <div>
          <Link href="/" className="text-3xl font-bold text-indigo-700 font-heading">
            B<span className="text-primary">LOGIFY</span>
          </Link>
        </div>

      
        <nav className="hidden lg:block">
          <ul className="flex gap-5 text-primary/80 text-sm items-center justify-center font-sans">
            <li><Navlink href="/">Home</Navlink></li>
            <li><Navlink href="/blogs">Blogs</Navlink></li>
            <li><Navlink href="/categories">Categories</Navlink></li>
            <li><Navlink href="/contact">Contact</Navlink></li>
          </ul>
        </nav>

    
        <div className="items-center gap-4 hidden lg:flex font-heading font-bold">
          <ModeToggle />
          {session ? (
            <Logout />
          ) : (
            <Link
              href="/auth/login"
              className="py-2 px-4 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
            >
              LOGIN
            </Link>
          )}
         
        </div>
         <MobileMenu session={session} />
      </div>
    </header>
  );
}

export default Navbar;