'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"

const Navlink = ({href,children,className}) => {
    const pathname = usePathname()
    const isActive = pathname===href;
  return (
   <Link
   href={href}
   className={
    isActive?
    "bg-indigo-600 px-2 py-1 rounded-md text-white":
    "text-zinc-700"
   }
   
   >
    {children}
   </Link>
  )
}

export default Navlink