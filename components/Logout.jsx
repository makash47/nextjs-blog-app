'use client';

import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const Logout = () => {
  const router = useRouter();

  async function handleLogout() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/auth/login");
          router.refresh();
        },
      },
    });
  }

  return (
    <button
      onClick={handleLogout}
      className="py-2 px-4 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors cursor-pointer"
    >
      Logout
    </button>
  );
};

export default Logout;