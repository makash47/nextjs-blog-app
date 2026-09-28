import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }) {
    const session = await auth.api.getSession({
        headers: await headers(),
      });
        if (!session?.user) {
          redirect("/auth/login");
        }
  return  <>{children}</>
}





