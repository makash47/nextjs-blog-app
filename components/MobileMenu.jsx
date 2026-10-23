"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Navlink from "./Navlink";
import ModeToggle from "./ModeToggle";
import Logout from "./Logout";
import { authClient } from "@/lib/auth-client";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
   const {
    data: session,
  } = authClient.useSession();

  return (
    <div className="lg:hidden">

      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>


      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-16 w-full bg-white/90 dark:bg-gray-900/90 border-t shadow-md transition-transform duration-300">
          <ul className="flex flex-col gap-4 items-center p-6 text-primary">

            <li>
              <Navlink href="/">
                Home
              </Navlink>
            </li>

            <li>
              <Navlink href="/blogs">
                Blogs
              </Navlink>
            </li>
            <li>
              <Navlink href="/contact">
                Contact
              </Navlink>
            </li>

            <li>
            {
                session?(
                   <Logout/>
                ):
                <Navlink href="/auth/login">Login</Navlink>
              }
            </li>

            <li>
              <ModeToggle/>
            </li>

          </ul>
        </div>
      )}

    </div>
  );
};

export default MobileMenu;