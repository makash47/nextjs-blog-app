
import Link from "next/link"
import Navlink from "./Navlink"
import MobileMenu from "./MobileMenu"
import { ModeToggle } from "./ModeToggle"
import { auth } from "@/lib/auth";
import { Button } from "./ui/button";
import { headers } from "next/headers";
import Logout from "./Logout";


async function Navbar(){
 const session = await auth.api.getSession({
     headers: await headers(),
   });

  return (
    <header className="w-full bg-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <div>
          <Link href="/" className="text-2xl font-bold text-indigo-700">Blogify</Link>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex gap-4 text-zinc-700">
            <li>
              <Navlink href="/" className="hover:text-indigo-600 transition-colors hover:border-b border-indigo-600">Home</Navlink>
            </li>
            <li>
              <Navlink href="/blogs">Blogs</Navlink>
            </li>
        
            <li>
              <Navlink href="/contact">Contact</Navlink>
            </li>

            <li>
              {
                session?(
                   <Logout/>
                ):
                <Navlink href="/auth/login">Login</Navlink>
              }
         
            </li>
         
          </ul>
        </nav>
        <MobileMenu />

        

      </div>

      
    </header>
  )
}

export default Navbar