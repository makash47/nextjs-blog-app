'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, children, className = "" }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const baseStyles = "transition-colors duration-200 cursor-pointer";
  const activeStyles = isActive 
    ? "bg-gray-200 dark:bg-gray-800 text-primary font-semibold px-3 py-2 rounded-md" 
    : "hover:text-indigo-600";

  return (
    <Link href={href} className={`${baseStyles} ${activeStyles} ${className}`}>
      {children}
    </Link>
  );
};

export default Navlink;